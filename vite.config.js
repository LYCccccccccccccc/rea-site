import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' 让产物可以在任意子路径（GitHub Pages 的 /<repo>/）下运行
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
