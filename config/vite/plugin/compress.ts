import type { Plugin } from 'vite';
import viteCompression from 'vite-plugin-compression'

export function setupCompressPlugin(): Plugin | Plugin[] {
    return viteCompression({
        ext: '.gz',
        threshold: 1024,
        deleteOriginFile: true
    })
}