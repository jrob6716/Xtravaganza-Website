import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base path (repo name)
export default defineConfig({
  plugins: [react()],
  // Must match the GitHub repo name for correct asset paths on Pages
  base: '/Xtravaganza-Website/',
})
