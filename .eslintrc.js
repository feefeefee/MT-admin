module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended',

        'plugin:prettier/recommended' // 添加 prettier 插件 以解决冲突
    ],
    overrides: [],
    parser: 'vue-eslint-parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
    },
    plugins: ['vue', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/no-var-requires': 'off'
    }
}
