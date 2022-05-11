/**
 * @name configManualChunk
 * @description chunk 拆包优化
 */

const vendorLibs: { match: string[]; output: string }[] = [
    {
        match: ['ant-design-vue'],
        output: 'antdv',
    },
    {
        match: ['echarts'],
        output: 'echarts',
    },
    {
        match: ['vue'],
        output: 'vue',
    },
    {
        match: ['vue-router'],
        output: 'vue-router',
    },
    {
        match: ['axios'],
        output: 'axios',
    },
    {
        match: ['pinia'],
        output: 'pinia',
    },
];

export const configManualChunk = (id: string) => {
    if (/[\\/]node_modules[\\/]/.test(id)) {
        const matchItem = vendorLibs.find((item) => {
            const reg = new RegExp(`[\\/]node_modules[\\/]_?(${item.match.join('|')})(.*)`, 'ig');
            return reg.test(id);
        });
        return matchItem ? matchItem.output : null;
    }
};