import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    environment: 'jsdom',
    // hey! 👋 over here
    globals: true,
    setupFiles: './src/__tests__/setup.js', // assuming the test folder is in the root of our project
  },
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
    ],
  },
  server:{
    proxy: {
      '/api':{
        target: 'https://stg.carwale.com/',
        changeOrigin: true,
        secure: false
      }
    }
  }
})
