import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [react()],
  server: {
    host: true,
    strictPort: true,
    port: 8080
  },
  base: '/react-explore/'
})
