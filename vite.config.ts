import { UserConfig, ConfigEnv } from 'vite'
import { resolve } from 'path'
import { createVitePlugin } from './config/vite/plugin'
import { configManualChunk } from './config/vite/optimizer'
import { generateModifyVars } from './config/themeConfig';
import { setupProxy } from './config/vite/proxy'

export default ({ mode }: ConfigEnv): UserConfig => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },
    plugins: createVitePlugin(),
    build: {
      sourcemap: false,
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        output: {
          manualChunks: configManualChunk
        }
      }
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
      cors: true,
      port: 3000,
      proxy: setupProxy(mode)
    },
  }
}
