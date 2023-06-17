<template>
  <n-layout-sider
    :native-scrollbar="false"
    collapse-mode="width"
    :collapsed-width="48"
    :width="240"
    show-trigger="bar"
    bordered
    >
    <n-layout-header></n-layout-header>
    <n-menu :options="menuOptions" default-value="about" :indent="16"/>
  </n-layout-sider>
</template>

<script setup lang="ts">
import { showError } from '#app'
import { defineComponent, h, Component } from 'vue'
import { useMessage } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import NaiveIcon from '@/modules/naiveui/runtime/components/NaiveIcon.vue'
import { RouterLink } from 'vue-router'
const renderIcon = (icon: String) => {
  return () => {
    return h(NaiveIcon, {
      name: icon,
    }, {
    })
  }
}

const route = useRoute()
if ('setup' in route.query) {
  throw new Error('error in setup')
}
if ('mounted' in route.query) {
  onMounted(() => {
    throw new Error('error in mounted')
  })
}
function triggerError () {
  throw new Error('manually triggered error')
}


const menuOptions: MenuOption[] = [
  {
    label: 'Dashboard',
    key: 'Dashboard',
    icon: renderIcon('ant-design:dashboard-outlined'),
    children: [
      {
        label: () =>
          h(
            RouterLink,
            {
              to: { name: 'index'}
            },
            { default: () => 'Going Home' }
          ),
        icon: renderIcon('ic:outline-home'),
        key: 'home'
      },{
        label: () => h(
          RouterLink,
          {
            to: { name: 'about' }
          },
          { default: () => 'About' }
        ),
        icon: renderIcon('material-symbols:info-outline'),
        key: 'about'
      }
    ]
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  },
  {
    label: () => h(
      RouterLink,
      {
        to: '/message'
      },
      { default: () => 'Message Centre' }
    ),
    key: 'hear-the-wind-sing',
    icon: renderIcon('mdi:bell-badge-outline')
  },
  {
    label: 'Content Management',
    key: 'pinball-1973',
    icon: renderIcon('mdi:newspaper-variant-multiple-outline'),
    disabled: true,
    children: [
      {
        label: 'Rat',
        key: 'rat'
      }
    ]
  },
  {
    label: 'Analytic',
    key: 'a-wild-sheep-chase',
    disabled: true,
    icon: renderIcon('material-symbols:analytics-outline-rounded')
  },
  {
    label: 'Settings',
    key: 'Dance Dance Dance',
    icon: renderIcon('mdi:cog-outline'),
    children: [
      {
        type: 'group',
        label: 'People',
        key: 'people',
        children: [
          {
            label: 'Narrator',
            key: 'narrator',
          },
          {
            label: 'Sheep Man',
            key: 'sheep-man',
          }
        ]
      },
      {
        label: 'Beverage',
        key: 'beverage',
        children: [
          {
            label: 'Whisky',
            key: 'whisky'
          }
        ]
      },
      {
        label: 'Food',
        key: 'food',
        children: [
          {
            label: 'Sandwich',
            key: 'sandwich'
          }
        ]
      },
      {
        label: 'The past increases. The future recedes.',
        key: 'the-past-increases-the-future-recedes'
      }
    ]
  }
]
const message = useMessage()

</script>