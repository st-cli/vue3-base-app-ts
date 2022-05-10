import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import {
  createStyleImportPlugin,
  AndDesignVueResolve
} from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'
import AutoImport from 'unplugin-auto-import/vite'
import { generateModifyVars } from './src/config'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importLess: true
        })
      ],
    }),
    createStyleImportPlugin({
      resolves: [AndDesignVueResolve()]
    }),
    viteCompression({
      ext: '.gz',
      threshold: 1024,
      deleteOriginFile: true
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia'
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
  ],
  build: {
    sourcemap: false,
    brotliSize: false,
    chunkSizeWarningLimit: 2000,
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: generateModifyVars(),
        javascriptEnabled: true
      }
    }
  },
  server: {
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://192.168.1.58:8002',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
})
