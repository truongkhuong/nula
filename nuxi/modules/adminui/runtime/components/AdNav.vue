<template>
  <n-layout-sider :native-scrollbar="false" collapse-mode="width" :collapsed-width="52" width="240" show-trigger="bar"
    bordered>
    <n-layout-header>
      <n-button v-if="menuOptions.length > 0" text @click="() => drawerActive = true" tag="span">
        <slot name="toggle">
          <NaiveIcon name="mdi:menu-close"></NaiveIcon>
        </slot>
      </n-button>
    </n-layout-header>
    <n-menu :options="menuOptions" :default-value="route.path" :indent="16" :collapsedIconSize="20" :iconSize="20"/>
  </n-layout-sider>
  <n-drawer v-if="menuOptions.length > 0" v-model:show="drawerActive" placement="left" width="240">

    <n-drawer-content title="Menu" :body-content-style="{ padding: 0 }" :header-style="{
      padding: '15px'
    }" :footer-style="{ justifyContent: 'start' }" :closable="drawerClosable">

      <template #header>
        <n-button v-if="menuOptions.length > 0" text @click="() => drawerActive = false" tag="span">
          <slot name="toggle">
            <NaiveIcon name="mdi:menu-open"></NaiveIcon>
          </slot>
        </n-button>
      </template>

      <n-menu mode="vertical" :default-value="route.path" :inverted="menuInverted" :options="menuOptions" />

      <template #footer>
        Logout
      </template>
    </n-drawer-content>

  </n-drawer>
</template>

<script setup lang="ts">
import { showError } from '#app'
// import { defineComponent, h, Component } from 'vue'
import { useMessage } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import NaiveIcon from '@/modules/naiveui/runtime/components/NaiveIcon.vue'

//@ts-ignore
import { ref, computed, h, useRoute, watch, useRouter } from "#imports"
//@ts-ignore
import { NuxtLink } from "#components"
import useNavbarRouter from "../composables/useNavbarRouter";
import { NavbarRoute } from '../types'

const { navbarRoutes } = useNavbarRouter();
const route = useRoute()
const router = useRouter()
const drawerActive = ref(false)

watch(route, () => drawerActive.value = false)

const menuOptions = computed<MenuOption[]>(() => {
  const cb = (routes: NavbarRoute[]) => routes.map(route => {

    const menuOption: MenuOption =
    {
      label: route.path ? () => h(NuxtLink, { to: route.path }, { default: () => route.label }) : route.label,
      icon: route.icon ? () => h(NaiveIcon, { name: route.icon }) : undefined,
      key: route.path || route.label,
      disabled: route.disabled
    }

    if (route.children) {
      menuOption.children = cb(route.children);
    }

    return menuOption;
  });

  return cb(navbarRoutes)
})

if ('setup' in route.query) {
  throw new Error('error in setup')
}
if ('mounted' in route.query) {
  onMounted(() => {
    throw new Error('error in mounted')
  })
}
function triggerError() {
  throw new Error('manually triggered error')
}

const message = useMessage()

</script>