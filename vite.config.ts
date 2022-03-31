import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/github-pages-demo-1/dist/',
  plugins: [vue()]
})
