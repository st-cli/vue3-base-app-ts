module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        amd: true,
        // 开启setup语法糖环境
        'vue/setup-compiler-macros': true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'plugin:prettier/recommended',
        './.eslintrc-auto-import.json'
    ],
    rules: {
        // 禁止使用 var
        'no-var': 'error',
        semi: 'off',
        // 优先使用 interface 而不是 type
        '@typescript-eslint/consistent-type-definitions': [
            'error',
            'interface'
        ],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        // 关闭此规则 使用 prettier 的格式化规则， 感觉prettier 更加合理，
        // 而且一起使用会有冲突
        'vue/max-attributes-per-line': ['off']
    }
}
