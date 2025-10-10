import { c as createComponent, d as createAstro, b as addAttribute, p as renderScript, a as renderTemplate, m as maybeRenderHead, r as renderComponent, q as renderHead, e as renderSlot } from './astro/server_lXlQOuMh.mjs';
/* empty css                          */

const $$Astro$1 = createAstro();
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/node_modules/.pnpm/astro@5.14.1_@types+node@24_6966d7cbf919482df795af726e27d936/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/node_modules/.pnpm/astro@5.14.1_@types+node@24_6966d7cbf919482df795af726e27d936/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800 dark:bg-gray-900 text-white py-8 px-4 mt-12"> <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"> <div> <h3 class="text-xl font-bold mb-4 transition-colors duration-300 hover:text-blue-400">Contacto</h3> <ul class="space-y-2"> <li> <a href="mailto:laboratorio.idiucv@gmail.com" class="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <span>laboratorio.idiucv@gmail.com</span> </a> </li> <li> <span class="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>0212-6053509</span> </span> </li> <li> <span class="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-300"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span>0212-6053508</span> </span> </li> </ul> </div> <div> <h3 class="text-xl font-bold mb-4 transition-colors duration-300 hover:text-blue-400">Enlaces Rápidos</h3> <ul class="space-y-2"> <li><a href="/" class="text-gray-300 hover:text-blue-400 transition-colors duration-300">Inicio</a></li> <li><a href="/#servicios" class="text-gray-300 hover:text-blue-400 transition-colors duration-300">Servicios</a></li> <li><a href="/examenes" class="text-gray-300 hover:text-blue-400 transition-colors duration-300">Exámenes</a></li> <li><a href="/#ubicacion" class="text-gray-300 hover:text-blue-400 transition-colors duration-300">Ubicación</a></li> <li><a href="/#contacto" class="text-gray-300 hover:text-blue-400 transition-colors duration-300">Contacto</a></li> </ul> </div> <div> <h3 class="text-xl font-bold mb-4 transition-colors duration-300 hover:text-blue-400">Sobre Nosotros y Redes</h3> <p class="text-gray-300 text-sm">
El Instituto de Inmunología "Dr. Nicolás Bianco Colmenares" (IDI) es un centro de referencia en investigación y servicios inmunológicos.
</p> <div class="flex space-x-4 mt-4"> <a href="https://www.instagram.com/idiucv1989/?hl=es" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2" aria-label="Instagram"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg> </a> <a href="http://www.ucv.ve/organizacion/facultades/facultad-de-medicina/institutos/instituto-de-inmunologia/quienes-somos.html" target="_blank" rel="noopener noreferrer" class="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2" aria-label="Universidad Central de Venezuela"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.05v-5.05zm0 0l-6.16-3.422a12.083 12.083 0 00-.665 6.479 11.952 11.952 0 016.825 4.108v-5.05z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4 0"></path> </svg> <span class="text-sm hidden sm:inline">UCV - IDI</span> </a> </div> </div> </div> <div class="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Instituto de Inmunología (IDI). Todos los derechos reservados.
</div> </footer>`;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en" class="scroll-smooth" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true })}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<header class="animate-fade-in fixed top-0 w-full z-50"> <nav class="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] border-b-1 border-gray-300 shadow-lg h-20 items-center px-4 bg-white/70 backdrop-blur-sm animate-fade-in"> <div class="flex justify-start"> <a class="group relative text-indigo-600 hover:text-indigo-600 transition-colors duration-300 font-semibold" href="/"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-blue-600 group-hover:text-indigo-600 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 3H4a2 2 0 00-2 2v14a2 2 0 002 2h16a2 2 0 002-2V5a2 2 0 00-2-2h-5"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M9 3v4a2 2 0 002 2h2a2 2 0 002-2V3m-6 9v2a2 2 0 002 2h2a2 2 0 002-2v-2"></path> </svg> <span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span> </a> </div> <button class="menu-toggle md:hidden justify-self-end text-gray-700 hover:text-indigo-600 transition-colors duration-300" aria-controls="mobile-menu" aria-expanded="false"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> <ul class="hidden navbar-menu md:flex gap-12 justify-center text-center font-semibold col-span-2 md:col-auto md:static p-4 md:p-0 flex-col md:flex-row"> <li class="animate-blurred-fade-in"><a class="group relative hover:text-indigo-600 transition-colors duration-300 flex items-center space-x-1" href="/quienes-somos"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20v-2h2M12 18H5a2 2 0 01-2-2v-2c0-.98 0-1.99.309-2.903M10 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 12a5 5 0 015-5h2a2 2 0 012 2v2M18 12h-2m-2 0h-2"></path></svg> <span>Qui\xE9nes Somos</span><span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span> </a></li> <li class="animate-blurred-fade-in"><a class="group relative hover:text-indigo-600 transition-colors duration-300 flex items-center space-x-1" href="/#servicios"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2m-9 0V3h4v2m-4 0h4"></path></svg> <span>Servicios</span><span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span> </a></li> <li class="animate-blurred-fade-in"><a class="group relative hover:text-indigo-600 transition-colors duration-300 flex items-center space-x-1" href="/examenes"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg> <span>Examenes</span><span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span> </a></li> <li class="animate-blurred-fade-in"><a class="group relative hover:text-indigo-600 transition-colors duration-300 flex items-center space-x-1" href="/#ubicacion"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> <span>Ubicacion</span><span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span> </a></li> <li class="animate-blurred-fade-in"><a class="group relative hover:text-indigo-600 transition-colors duration-300 flex items-center space-x-1" href="/#contacto"> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <span>Contacto</span><span class="absolute left-0 -bottom-1 h-0.5 w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span> </a></li> </ul> <div class="hidden md:flex justify-end"> <a href="https://www.instagram.com/idiucv1989/?hl=es" target="_blank" rel="noopener noreferrer" class="text-gray-600 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2" aria-label="Instagram"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect> <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path> <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line> </svg> </a> </div> </nav> <div id="mobile-menu-overlay" class="fixed inset-0 bg-black/50 z-[999] hidden transition-opacity duration-300" aria-hidden="true"></div> <div id="mobile-menu" class="fixed top-0 right-0 h-full w-64 bg-white shadow-2xl z-[1000] transform translate-x-full transition-transform duration-300" role="dialog" aria-modal="true"> <div class="p-6 flex flex-col h-full"> <button class="menu-toggle-close self-end text-gray-700 hover:text-indigo-600 transition-colors duration-300 mb-8" aria-label="Cerrar men\xFA"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> <ul class="flex flex-col gap-6 text-xl font-semibold"> <li><a class="hover:text-indigo-600" href="/quienes-somos">Qui\xE9nes Somos</a></li> <li><a class="hover:text-indigo-600" href="/#servicios">Servicios</a></li> <li><a class="hover:text-indigo-600" href="/examenes">Examenes</a></li> <li><a class="hover:text-indigo-600" href="/#ubicacion">Ubicacion</a></li> <li><a class="hover:text-indigo-600" href="/#contacto">Contacto</a></li> </ul> <div class="mt-auto pt-6 border-t border-gray-200"> <a class="text-sm text-gray-500 hover:text-indigo-600" href="/">Redes Sociales</a> </div> </div> </div> </header> <script>
  // Definimos la funci\xF3n toggleMenu para que sea accesible.
  function toggleMenu(isOpen) {
    const menu = document.getElementById('mobile-menu');
    const overlay = document.getElementById('mobile-menu-overlay');
    
    if (!menu || !overlay) return; 

    if (isOpen) {
      overlay.classList.remove('hidden');
      document.body.classList.add('overflow-hidden');
      menu.classList.remove('translate-x-full'); 
      menu.classList.add('translate-x-0');
    } else {
      document.body.classList.remove('overflow-hidden');
      menu.classList.remove('translate-x-0');
      menu.classList.add('translate-x-full');
      
      setTimeout(() => {
        overlay.classList.add('hidden');
      }, 300); 
    }
  }

  // Comprobamos si el listener ya existe en la ventana/documento para evitar la duplicaci\xF3n.
  if (!window.menuGlobalListenerAttached) {
    
    // Asignamos un listener \xFAnico al documento entero.
    document.addEventListener('click', (e) => {
      const target = e.target;
      
      // 1. Bot\xF3n Hamburguesa (para abrir)
      if (target.closest('.menu-toggle')) {
        e.preventDefault(); 
        toggleMenu(true);
        return;
      }
      
      // 2. Botones de cerrar (X) y Overlay
      if (target.closest('.menu-toggle-close') || target.id === 'mobile-menu-overlay') {
        toggleMenu(false);
        return;
      }
      
      // 3. Clic en cualquier enlace dentro del men\xFA (para cerrar despu\xE9s de navegar)
      if (target.closest('#mobile-menu a')) {
          // El timeout es importante para que la navegaci\xF3n con View Transitions se registre
          setTimeout(() => toggleMenu(false), 50); 
      }
    });

    // Marcamos una variable global para asegurar que este bloque solo se ejecuta una vez.
    window.menuGlobalListenerAttached = true;
  }
<\/script>`])), maybeRenderHead());
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/components/Nav.astro", void 0);

export { $$Layout as $, $$Nav as a };
