import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

function getroutes() {
  let arr = []
  const modules: any = import.meta.glob('./*.routes.ts', { eager: true })
  for (const path in modules) {
    arr.push(...modules[path].default)
  }
  return arr
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index'
  },
  ...getroutes()
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((_to, _from, next) => {
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

export default router
