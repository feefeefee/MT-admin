import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint' // 引入
import viteStylelint from 'vite-plugin-stylelint'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), eslintPlugin(), viteStylelint()]
})
