// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Importación del paquete principal de Vercel
import vercel from '@astrojs/vercel';


// https://astro.build/config
export default defineConfig({
  // Configuración de Vite para incluir Tailwind CSS v4
  vite: {
    plugins: [tailwindcss()]
  },

  // Mantener output como 'server' para usar Vercel Serverless Functions
  output:'static', 

  // SOLUCIÓN FINAL:
  // 1. Forzar runtime: 'nodejs'.
  // 2. Forzar format: 'cjs' (CommonJS) para resolver el ERR_MODULE_NOT_FOUND.
  adapter: vercel({
    runtime: 'nodejs',
    format: 'cjs' // <--- ESTO DEBE ARREGLARLO
  }),
});
