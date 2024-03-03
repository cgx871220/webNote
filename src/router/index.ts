import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Vue from '../views/VueView.vue'
import option from '@/views/vue/OptionView.vue'
import composition from '@/views/vue/CompositionVue.vue'
import VueRouter from '@/views/VueRouter.vue'
import ComponentData from '@/views/ComponentData.vue'
import Bootstrap from "@/views/BootstrapView.vue"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/git',
      name: 'git',
      component: () => import('../views/GitView.vue')
    },
    {
      path: '/vue',
      name: 'vue',
      component: Vue,
      children: [
        {
          path: 'option',
          component: option
        },
        {
          path: 'composition',
          component: composition
        }
      ]
    },
    {
      path:'/vuerouter',
      name:'vuerouter',
      component:VueRouter
    },
    {
      path:'/componentdata',
      name:'component',
      component:ComponentData
    },
    {
      path:'/bootstrap',
      name:'bootstrap',
      component:Bootstrap
    }
  ]
})

export default router
