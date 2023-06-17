// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: 'naive-ui-style' },
        { name: 'vue-style' },
      ],
    },
  },
  build: {
    transpile:
      process.env.NODE_ENV === 'production'
        ? [
            'naive-ui',
            'vueuc',
            '@css-render/vue3-ssr',
            '@juggle/resize-observer'
          ]
        : ['@juggle/resize-observer']
  },
  components: {
    dirs: [
      '~/components',
      // {
      //   path: '~/other-components-folder',
      //   extensions: ['vue'],
      //   prefix: 'nuxt'
      // }
    ]
  },
  css: ['~/assets/sass/main.sass'],
  devtools: { enabled: true },
  modules: [
    './modules/naiveui',
    './modules/adminui',
  ],
  // naiveui: {
  //   colorModePreference: 'light',
  //   iconSize: 18,
  //   themeConfig: {},
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@use "@/assets/sass/variables.sass" as *\n'
        }
      }
    },
    // optimizeDeps: {
    //   include:
    //     process.env.NODE_ENV === 'development'
    //       ? ['naive-ui', 'vueuc', 'date-fns-tz/esm/formatInTimeZone']
    //       : []
    // }
  }
})
