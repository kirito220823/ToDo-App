import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ToDo-App/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()],
})
