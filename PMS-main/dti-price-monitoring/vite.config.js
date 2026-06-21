import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    // Only open browser in development, not in CI/Vercel environment
    open: process.env.NODE_ENV !== 'production' && !process.env.VERCEL,
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
  build: {
    // Ensure production builds do not include source maps or console spam
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
})