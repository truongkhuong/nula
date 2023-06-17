import { useState } from "#imports";
import type { Ref, ref } from "vue";
import { NavbarRoute } from "../types";

export default function useNavbarRouter() {
  const navbarRoutes: NavbarRoute[] = [
    {
      label: 'Dashboard',
      icon: 'ant-design:dashboard-outlined',
      children: [
        {
          label: 'Home',
          icon: 'ic:outline-home',
          path: '/'
        }, {
          label: 'About',
          icon: 'material-symbols:info-outline',
          path: '/about'
        }
      ]
    },
    {
      label: 'Message Centre',
      icon: 'mdi:bell-badge-outline',
      path:'/message-centre'
    },
    {
      label: 'Service Operator',
      icon: 'icon-park-outline:setting-web',
      children: [
        {
          label: 'Module',
          icon: 'fluent:form-24-regular',
          children: [
            {
              label: 'Module List',
              path: '/service-operator/modules/all',
              icon: 'fluent:form-20-regular'
            },
            {
              label: 'Create Module',
              path: '/service-operator/modules/create',
              icon: 'fluent:form-new-20-regular'
            }
          ]
        }
      ]
    },
    {
      label: 'Content Management',
      icon: 'mdi:newspaper-variant-multiple-outline',
      disabled: true,
      children: [
        {
          label: 'Rat',
          path:'/rat'
        }
      ]
    },
    {
      label: 'Analytics',
      disabled: true,
      icon: 'material-symbols:analytics-outline-rounded',
      path:'/analytics'
    },
    {
      label: 'Settings',
      icon: 'mdi:cog-outline',
      children: [
        {
          type: 'group',
          label: 'People',
          children: [
            {
              label: 'Narrator',
            },
            {
              label: 'Sheep Man',
            }
          ]
        },
        {
          label: 'Beverage',
          children: [
            {
              label: 'Whisky',
            }
          ]
        },
        {
          label: 'Food',
          children: [
            {
              label: 'Sandwich',
            }
          ]
        },
        {
          label: 'The past increases. The future recedes.',
        }
      ]
    }
  ]


  return { navbarRoutes };
}
