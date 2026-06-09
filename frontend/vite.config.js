import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/~cuatro/' es NECESARIO para el servidor del colegio.
// Sin esto, los assets (JS/CSS) no cargan porque Apache sirve
// la app desde una subcarpeta, no desde la raíz.
export default defineConfig({
  plugins: [react()],
  base: '/~cuatro/',
})