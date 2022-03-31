import Layout from '@/components/layoutBase/index.vue'

export default [
    {
        path: '/demo',
        component: Layout,
        name: 'demo',
        meta: { title: 'demo' },
        redirect: '/demo/lottery1',
        children: [
            {
                path: 'lottery1',
                name: '抽奖1',
                component: () => import('@/view/demo/lottery/Lottery1.vue')
            },
            {
                path: 'calendar',
                name: '日历',
                component: () => import('@/view/demo/calendar/Calendar.vue')
            },
            {
                path: 'content',
                name: '目录',
                component: () => import('@/view/demo/content/Content.vue')
            },
            {
                path: 'card1',
                name: '卡片1',
                component: () => import('@/view/demo/card/Card1.vue')
            },
            {
                path: 'card2',
                name: '卡片2',
                component: () => import('@/view/demo/card/Card2.vue')
            },
            {
                path: 'card3',
                name: '卡片3',
                component: () => import('@/view/demo/card/Card3.vue')
            },
            {
                path: 'button1',
                name: '按钮1',
                component: () => import('@/view/demo/button/Button1.vue')
            },
            {
                path: 'button2',
                name: '按钮2',
                component: () => import('@/view/demo/button/Button2.vue')
            },
            {
                path: 'loading1',
                name: 'Loading1',
                component: () => import('@/view/demo/loading/Loading1.vue')
            },
            {
                path: 'number',
                name: 'Number',
                component: () => import('@/view/demo/number/Number.vue')
            }
        ]
    }
]
