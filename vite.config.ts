import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/mini-bank/', // ✅ Must match your GitHub repo name
  plugins: [vue()]
})
