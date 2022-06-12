import LayoutBase from '@/components/layoutBase/index.vue'
import { RouteRecordRaw } from 'vue-router'

const systemRouter: RouteRecordRaw[] = [
    {
        path: '/three',
        component: LayoutBase,
        name: 'threejs',
        meta: { title: 'three' },
        redirect: '/three/base',
        children: [
            {
                path: 'base',
                name: '第一个三维场景',
                meta: { title: '第一个三维场景'},
                component: () => import('@/views/three/gettingStarted/Base.vue')
            },
            {
                path: 'shadow',
                name: '阴影',
                meta: { title: '阴影'},
                component: () => import('@/views/three/gettingStarted/Shadow.vue')
            },
            {
                path: 'sport',
                name: '运动',
                meta: { title: '运动'},
                component: () => import('@/views/three/gettingStarted/Sport.vue')
            },
            {
                path: 'scene',
                name: '场景',
                meta: { title: '场景'},
                component: () => import('@/views/three/basicComponents/Scene.vue')
            },
            {
                path: 'ambientLight',
                name: '基本光源',
                meta: { title: '基本光源'},
                component: () => import('@/views/three/light/AmbientLight.vue')
            },
            {
                path: 'spotLight',
                name: '聚光灯光源',
                meta: { title: '聚光灯光源'},
                component: () => import('@/views/three/light/SpotLight.vue')
            },
            {
                path: 'pointLight',
                name: '点光源',
                meta: { title: '点光源'},
                component: () => import('@/views/three/light/PointLight.vue')
            },
            {
                path: 'directionLight',
                name: '平行光',
                meta: { title: '平行光'},
                component: () => import('@/views/three/light/DirectionalLight.vue')
            },
            {
                path: 'hemisphereLight',
                name: '半球光光源',
                meta: { title: '半球光光源'},
                component: () => import('@/views/three/light/HemisphereLight.vue')
            },
            {
                path: 'lensFlare',
                name: '光晕',
                meta: { title: '光晕'},
                component: () => import('@/views/three/light/LensFlare.vue')
            },
            {
                path: 'meshBasicMaterial',
                name: '网格基础材质',
                meta: { title: 'MeshBasicMaterial'},
                component: () => import('@/views/three/material/MeshBasicMaterial.vue')
            },
            {
                path: 'meshDepthMaterial',
                name: '网格深度材质',
                meta: { title: 'MeshBasicMaterial'},
                component: () => import('@/views/three/material/MeshDepthMaterial.vue')
            },
            {
                path: 'multiMaterialObject',
                name: '联合材质',
                meta: { title: 'multiMaterialObject'},
                component: () => import('@/views/three/material/MultiMaterialObject.vue')
            },
            {
                path: 'meshNormalMaterial',
                name: '网格法向材质',
                meta: { title: 'meshNormalMaterial'},
                component: () => import('@/views/three/material/MeshNormalMaterial.vue')
            },
            {
                path: 'meshFaceMaterial',
                name: '多种材质',
                meta: { title: 'meshFaceMaterial'},
                component: () => import('@/views/three/material/MeshFaceMaterial.vue')
            },
            {
                path: 'meshLambertMaterial',
                name: '网格Lambert材质',
                meta: { title: 'meshLambertMaterial'},
                component: () => import('@/views/three/material/MeshLambertMaterial.vue')
            },
            {
                path: 'meshPhongMaterial',
                name: '网格Phong材质',
                meta: { title: 'meshPhongMaterial'},
                component: () => import('@/views/three/material/MeshPhongMaterial.vue')
            },
            {
                path: 'meshStandardMaterial',
                name: '网格标准材质',
                meta: { title: 'meshStandardMaterial'},
                component: () => import('@/views/three/material/MeshStandardMaterial.vue')
            },
            {
                path: 'meshPhysicalMaterial',
                name: '网格物理材质',
                meta: { title: 'meshPhysicalMaterial'},
                component: () => import('@/views/three/material/MeshPhysicalMaterial.vue')
            }
        ]
    }
]

export default systemRouter
