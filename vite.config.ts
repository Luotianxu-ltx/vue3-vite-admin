import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
const config = loadEnv('development', './')

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            imports: ['vue', 'vue-router'],
            dts: 'src/types/auto-imports.d.ts'
        }),
        Components({
            resolvers: [ElementPlusResolver()],
            // dirs: ['src/components'],
            // directoryAsNamespace: true,
            dts: 'src/types/components.d.ts'
            // deep: true
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    },
    server: {
        port: 8000,
        open: true,
        proxy: {
            // 开发环境代理配置
            [config.VITE_APP_BASE_URL + '/api']: {
                target: 'https://mock.apipost.cn/app/mock/project/d5c047b0-0e83-4778-a6b1-edae4f63dfbf',
                changeOrigin: true,
                rewrite: (serverPath) =>
                    serverPath.replace(config.VITE_APP_BASE_URL + '/api', '')
            },
            [config.VITE_APP_BASE_URL + '/jhApi']: {
                target: 'http://v.juhe.cn',
                changeOrigin: true,
                rewrite: (serverPath) =>
                    serverPath.replace(config.VITE_APP_BASE_URL + '/jhApi', '')
            },
            [config.VITE_APP_BASE_URL + '/map']: {
                target: 'https://restapi.amap.com',
                changeOrigin: true,
                rewrite: (serverPath) =>
                    serverPath.replace(config.VITE_APP_BASE_URL + '/map', '')
            }
        }
    }
})
