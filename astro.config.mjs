// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// CORRECCIÓN FINAL: Importar el paquete principal.
// Dejamos que Astro y Vercel determinen automáticamente el target 'serverless' 
// basado en 'output: "server"', evitando errores de importación directa.
import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  // Mantener output como 'server' para SSR/Vercel Functions
  output:'server', 

  adapter: vercel()
});
