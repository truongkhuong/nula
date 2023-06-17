<template>
  <n-layout-header bordered>
    <div class="flex items-center">
      <n-breadcrumb>
        <n-breadcrumb-item>Podcast</n-breadcrumb-item>
        <n-breadcrumb-item>Best Collection</n-breadcrumb-item>
        <n-breadcrumb-item>Ultimate Best Collection</n-breadcrumb-item>
        <n-breadcrumb-item>Anyway.FM</n-breadcrumb-item>
      </n-breadcrumb>
      
    </div>
    <div class="flex gap-2 items-center">
      <n-button text class="px-2 hover:bg-gray-300/10">
        <NaiveIcon name="uil:search"/>
      </n-button>
      <n-popover trigger="click"
      >
        <template #trigger>
          <n-button text class="px-2 hover:bg-gray-300/10">
            <NaiveIcon name="mdi:bell-badge-outline"/>
          </n-button>
        </template>
        <template #header>
          <n-text strong depth="1">
            Divider is on the bottom.
          </n-text>
        </template>
        Content.
        <template #footer>
          <n-button text>View All</n-button>
        </template>
      </n-popover>
      <n-button text class="px-2 hover:bg-gray-300/10">
        <template #icon>
          <NaiveColorModeSwitch/>
        </template>
      </n-button>
      <n-button text class="px-2 hover:bg-gray-300/10">
        <template #icon><NaiveIcon name="gridicons:fullscreen"/></template>
      </n-button>
      <n-dropdown :options="options" trigger="click">
        <n-avatar>A</n-avatar>
      </n-dropdown>
    </div>
  </n-layout-header>
  <!-- <header>
    <div>
      <NaiveColorModeSwitch/>
    </div>
  </header> -->
</template>
<script lang="ts">
import { h, defineComponent } from 'vue'
import type { Component } from 'vue'
import NaiveIcon from '@/modules/naiveui/runtime/components/NaiveIcon.vue'

const renderIcon = (icon: String) => {
  return () => {
    return h(NaiveIcon, {
      name: icon,
    }, {
    })
  }
}

export default defineComponent({
  setup () {
    return {
      options: [
        {
          label: 'Profile',
          key: 'profile',
          icon: renderIcon('mdi:bell-badge-outline')
        },
        {
          label: 'Edit Profile',
          key: 'editProfile',
        },
        {
          label: 'Logout',
          key: 'logout',
        }
      ]
    }
  }
})
</script>