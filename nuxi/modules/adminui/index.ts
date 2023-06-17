import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addImportsDir,
  addComponent,
  addImports,
  extendViteConfig,
  extendPages
} from "@nuxt/kit";
import { fileURLToPath } from "url";
import { resolve } from 'pathe'
import { NuxtPage } from "nuxt/schema";

// Module options TypeScript inteface definition
export interface ModuleOptions {
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@nuxt-adminui',
    version: "1.0.0",
    configKey: "adminui",
    compatibility: {
      nuxt: "^3.0.0",
    },
  },

  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = fileURLToPath(new URL("./runtime", import.meta.url));

    // Add components
    addComponent({
      name: "AdNav",
      filePath: resolve(runtimeDir, "components", "AdNav.vue"),
    });

    // Add composables directory
    addImportsDir(resolve(runtimeDir, "composables"));
    console.log(extendPages,'extendPages')
    extendPages((pages: NuxtPage[]) => {
      console.log(pages, 'EXTEND PAGES')
      // Add /test page
      pages.push({
        name: 'ModuleManagement',
        path: '/service-operator/modules/all',
        file: resolve(__dirname, './pages/modules/List.vue')
      })
      pages.push({
        name: 'CreateModule',
        path: '/service-operator/modules/:id',
        file: resolve(__dirname, './pages/modules/[id].vue')
      })
    })
  },
});
