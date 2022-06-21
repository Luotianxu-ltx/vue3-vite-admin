import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import systemRouter from '@/router/modules/system'
import demoRouter from '@/router/modules/style'
import mapRouter from '@/router/modules/map'
import openRouter from '@/router/modules/open'
import threeRouter from '@/router/modules/three'
import functionRouter from '@/router/modules/function'
import NProgress from 'nprogress'
import 'nprogress/css/nprogress.css'
NProgress.configure({ showSpinner: false })

export const asyncRouterList: Array<RouteRecordRaw> = [
    ...systemRouter,
    ...demoRouter,
    ...mapRouter,
    ...openRouter,
    ...threeRouter,
    ...functionRouter
]

export type AppRouteRecordRaw = RouteRecordRaw & {
    hidden?: boolean
}

const baseRouter: AppRouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/system/login/Login.vue')
    }
]

const routes: RouteRecordRaw[] = [...baseRouter, ...asyncRouterList]

const router = createRouter({
    routes: routes,
    history: createWebHashHistory()
})

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router
