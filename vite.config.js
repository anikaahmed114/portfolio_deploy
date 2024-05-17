import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio_deploy/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.jsx',  // Adjust the input to your main entry point
      },
      output: {
        // You can also adjust output options here if needed
      },
      // Exclude specific files
      external: [
        // Add paths or file patterns to exclude
        '/assets/index-CL9shaaN.js',
        '/assets/index-cGSJziIs.css'
      ]
    }
  }
})
