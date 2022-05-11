import AutoImport from 'unplugin-auto-import/vite'

export function autoImportPlugin() {
    return AutoImport({
        imports: [
            'vue',
            'vue-router',
            'pinia'
        ],
        dts: 'src/auto-imports.d.ts',
        eslintrc: {
            enabled: true,
            filepath: '../../../.eslintrc-auto-import.json',
            globalsPropValue: true
        }
    })
}