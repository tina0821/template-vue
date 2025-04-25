import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/index.vue'
import Demo from '@/views/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [ { path: '/', component: Home }, { path: '/demo', component: Demo },  ],
  scrollBehavior: () => ({
    top: 0,
    behavior: 'smooth',
  }),
})




export default router
