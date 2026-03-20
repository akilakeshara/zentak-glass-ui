import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Standard config for building the Netlify demo site
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
