import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export function setupAutoRegisterComponentPlugin() {
    return Components({
        resolvers: [
            AntDesignVueResolver({
                importLess: true
            })
        ],
        dts: 'src/component.d.ts',
        include: [/\.vue$/, /\.vue\?vue/],
        exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.husky[\\/]/, /[\\/]dist[\\/]/,],
    })
}