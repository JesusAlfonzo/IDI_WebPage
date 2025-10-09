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
  output:'server', 

  // Corrección: La sintaxis de objeto aquí es correcta, asegurando que no haya errores de comas o expresiones
  adapter: vercel({
    runtime: 'nodejs' // Clave y valor válidos
  }),
});
