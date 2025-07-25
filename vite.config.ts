import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/bank-system/',  // must match your GitHub repo name
  plugins: [vue()]
})
