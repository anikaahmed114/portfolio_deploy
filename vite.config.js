import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio_deploy/',
  plugins: [react(), 
    {
      name: 'exclude-files',
      enforce: 'post',
      generateBundle(options, bundle) {
        for (const fileName in bundle) {
          if (fileName.includes('index-CL9shaaN.js') || fileName.includes('index-cGSJziIs.css')) {
            delete bundle[fileName];
          }
        }
      }
    }],
})
