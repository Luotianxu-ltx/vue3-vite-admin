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
            },
            {
                path: 'lineBasicMaterial',
                name: '直线基础材质',
                meta: { title: 'lineBasicMaterial'},
                component: () => import('@/views/three/material/LineBasicMaterial.vue')
            },
            {
                path: 'lineDashedMaterial',
                name: '虚线材质',
                meta: { title: 'lineDashedMaterial'},
                component: () => import('@/views/three/material/LineDashedMaterial.vue')
            },
            {
                path: 'planeGeometry',
                name: '平面',
                meta: { title: 'planeGeometry'},
                component: () => import('@/views/three/geometry/PlaneGeometry.vue')
            },
            {
                path: 'circleGeometry',
                name: '圆形',
                meta: { title: 'circleGeometry'},
                component: () => import('@/views/three/geometry/CircleGeometry.vue')
            },
            {
                path: 'ringGeometry',
                name: '环形',
                meta: { title: 'ringGeometry'},
                component: () => import('@/views/three/geometry/RingGeometry.vue')
            },
            {
                path: 'shapeGeometry',
                name: '任意图形',
                meta: { title: 'shapeGeometry'},
                component: () => import('@/views/three/geometry/ShapeGeometry.vue')
            },
            {
                path: 'boxGeometry',
                name: '长方体',
                meta: { title: 'boxGeometry'},
                component: () => import('@/views/three/geometry/BoxGeometry.vue')
            },
            {
                path: 'sphereGeometry',
                name: '球体',
                meta: { title: 'sphereGeometry'},
                component: () => import('@/views/three/geometry/SphereGeometry.vue')
            },
            {
                path: 'cylinderGeometry',
                name: '圆柱体',
                meta: { title: 'cylinderGeometry'},
                component: () => import('@/views/three/geometry/CylinderGeometry.vue')
            },
            {
                path: 'coneGeometry',
                name: '圆锥体',
                meta: { title: 'coneGeometry'},
                component: () => import('@/views/three/geometry/ConeGeometry.vue')
            },
            {
                path: 'torusGeometry',
                name: '圆环',
                meta: { title: 'torusGeometry'},
                component: () => import('@/views/three/geometry/TorusGeometry.vue')
            },
            {
                path: 'torusKnotGeometry',
                name: '环状扭结',
                meta: { title: 'torusKnotGeometry'},
                component: () => import('@/views/three/geometry/TorusKnotGeometry.vue')
            },
            {
                path: 'polyhedron',
                name: '多面体',
                meta: { title: 'polyhedron'},
                component: () => import('@/views/three/geometry/Polyhedron.vue')
            },
            {
                path: 'convexGeometry',
                name: '凸包几何体',
                meta: { title: 'convexGeometry'},
                component: () => import('@/views/three/geometry/ConvexGeometry.vue')
            },
            {
                path: 'latheGeometry',
                name: '车削缓冲几何体',
                meta: { title: 'latheGeometry'},
                component: () => import('@/views/three/geometry/LatheGeometry.vue')
            },
            {
                path: 'extrudeGeometry',
                name: '挤压缓冲几何体',
                meta: { title: 'extrudeGeometry'},
                component: () => import('@/views/three/geometry/ExtrudeGeometry.vue')
            },
            {
                path: 'tubeGeometry',
                name: '管道缓冲几何体',
                meta: { title: 'tubeGeometry'},
                component: () => import('@/views/three/geometry/TubeGeometry.vue')
            },
            {
                path: 'parametricGeometry',
                name: '参数化缓冲几何体',
                meta: { title: 'parametricGeometry'},
                component: () => import('@/views/three/geometry/ParametricGeometry.vue')
            },
            {
                path: 'spriteMaterial1',
                name: '点精灵材质1',
                meta: { title: 'parametricGeometry'},
                component: () => import('@/views/three/particle/SpriteMaterial1.vue')
            },
            {
                path: 'spriteMaterial2',
                name: '点精灵材质2',
                meta: { title: 'parametricGeometry'},
                component: () => import('@/views/three/particle/SpriteMaterial2.vue')
            },
            {
                path: 'pointsMaterial1',
                name: '点材质1',
                meta: { title: 'pointsMaterial1'},
                component: () => import('@/views/three/particle/PointsMaterial1.vue')
            },
            {
                path: 'pointsMaterial2',
                name: '点材质2',
                meta: { title: 'pointsMaterial2'},
                component: () => import('@/views/three/particle/PointsMaterial2.vue')
            },
            {
                path: 'pointsMaterial3',
                name: '点材质3',
                meta: { title: 'pointsMaterial2'},
                component: () => import('@/views/three/particle/PointsMaterial3.vue')
            },
            {
                path: 'Test',
                name: 'Test',
                meta: { title: 'Test'},
                component: () => import('@/views/three/geometry/Test.vue')
            }
        ]
    }
]

export default systemRouter
