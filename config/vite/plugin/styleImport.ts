import {
    createStyleImportPlugin,
    AndDesignVueResolve
} from 'vite-plugin-style-import'

export function setupStyleImportPlugin() {
    return createStyleImportPlugin({
        resolves: [AndDesignVueResolve()]
    })
}