import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.10.158', // This will make the server accessible externally
    port: 5173, // Specify the port you want to use
  },
})