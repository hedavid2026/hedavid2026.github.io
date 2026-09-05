import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// User site: https://hedavid2026.github.io/  → base must be '/'
// GitHub Pages Source: Deploy from branch → /docs folder
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
