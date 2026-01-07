import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'X-Frame-Options': 'ALLOW-FROM https://adityaraj3136.github.io/',
      'Content-Security-Policy': "frame-ancestors 'self' https://adityaraj3136.github.io/",
    }
  }
})
