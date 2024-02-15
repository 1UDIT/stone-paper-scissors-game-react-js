import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/stone-paper-scissors-game-react-js/",
  plugins: [react()],
})
