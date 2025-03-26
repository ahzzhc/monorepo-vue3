import { type RouteRecordRaw } from 'vue-router'

const router: Array<RouteRecordRaw> = [
  {
    path: '/index',
    component: () => import('@/views/demo/index.vue')
  }
]

export default router
