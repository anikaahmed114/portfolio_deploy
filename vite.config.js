import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio_deploy/',
  plugins: [react(), viteCompression()],
})
