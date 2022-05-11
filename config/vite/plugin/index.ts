import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import { setupStyleImportPlugin } from './styleImport'
import { setupAutoRegisterComponentPlugin } from './component'
import { setupCompressPlugin } from './compress'
import { autoImportPlugin } from './autoImport'

export function createVitePlugin() {
    const vitePlugins: (Plugin | Plugin[])[] = [
        //vue支持
        vue(),
        // 自动按需引入依赖
        autoImportPlugin(),
        //自动按需引入样式
        setupStyleImportPlugin(),
        //自动按需引入组件
        setupAutoRegisterComponentPlugin(),
        //rollup-plugin-gzip压缩
        setupCompressPlugin()
    ]
    return vitePlugins
}