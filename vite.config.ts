import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Cambia 'localhost' por '0.0.0.0' para permitir conexiones desde cualquier dirección IP
    port: 3000, // Cambia el puerto si lo deseas
  },
  plugins: [react()],
})
