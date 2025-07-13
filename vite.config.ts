import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import * as path from 'path';             // ← importa path

// https://vite.dev/config/
export default defineConfig({

  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }]
  },


  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000',
      '/ws': {
        target: 'ws://localhost:8000',
        ws: true,
      },
    },
  }


})
