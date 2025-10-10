import { c as createComponent, a as renderTemplate, m as maybeRenderHead, d as createAstro, b as addAttribute, r as renderComponent } from '../chunks/astro/server_lXlQOuMh.mjs';
/* empty css                                  */
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_CtxZ6kaV.mjs';
import { $ as $$Divider } from '../chunks/Divider_ZBdTZHIC.mjs';
export { renderers } from '../renderers.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Slider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", `<section \xA0 id="slider" \xA0 class="relative w-full max-w-screen-lg mx-auto overflow-hidden rounded-lg animate-blurred-fade-in aspect-video"> <div class="flex h-full w-full transition-transform duration-500 ease-in-out"> <figure class="flex-shrink-0 w-full h-full relative" data-active> <img \xA0 \xA0 \xA0 \xA0 src="../../public/images/IDI-slider-1.jpg" \xA0 \xA0 \xA0 \xA0 alt="IDI slider 1" \xA0 \xA0 \xA0 \xA0 class="w-full h-full block object-cover" \xA0 \xA0 \xA0> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> </figure> <figure class="flex-shrink-0 w-full h-full relative"> <img \xA0 \xA0 \xA0 \xA0 src="../../public/images/IDI-slider-2.jpg" \xA0 \xA0 \xA0 \xA0 alt="IDI slider 2" \xA0 \xA0 \xA0 \xA0 class="w-full h-full block object-cover" \xA0 \xA0 \xA0> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> </figure> </div> <button \xA0 \xA0 class="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors duration-300 backdrop-blur-sm focus:outline-none" \xA0 \xA0 data-button="prev" \xA0> <svg \xA0 \xA0 \xA0 class="w-8 h-8 text-white" \xA0 \xA0 \xA0 fill="none" \xA0 \xA0 \xA0 stroke="currentColor" \xA0 \xA0 \xA0 viewBox="0 0 24 24" \xA0 \xA0 \xA0 xmlns="http://www.w3.org/2000/svg" \xA0 \xA0> <path \xA0 \xA0 \xA0 \xA0 stroke-linecap="round" \xA0 \xA0 \xA0 \xA0 stroke-linejoin="round" \xA0 \xA0 \xA0 \xA0 stroke-width="2" \xA0 \xA0 \xA0 \xA0 d="M15 19l-7-7 7-7" \xA0 \xA0 \xA0></path> </svg> </button> <button \xA0 \xA0 class="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors duration-300 backdrop-blur-sm focus:outline-none" \xA0 \xA0 data-button="next" \xA0> <svg \xA0 \xA0 \xA0 class="w-8 h-8 text-white" \xA0 \xA0 \xA0 fill="none" \xA0 \xA0 \xA0 stroke="currentColor" \xA0 \xA0 \xA0 viewBox="0 0 24 24" \xA0 \xA0 \xA0 xmlns="http://www.w3.org/2000/svg" \xA0 \xA0> <path \xA0 \xA0 \xA0 \xA0 stroke-linecap="round" \xA0 \xA0 \xA0 \xA0 stroke-linejoin="round" \xA0 \xA0 \xA0 \xA0 stroke-width="2" \xA0 \xA0 \xA0 \xA0 d="M9 5l7 7-7 7" \xA0 \xA0 \xA0></path> </svg> </button> </section> <script>
  /**
   * Funci\xF3n que inicializa toda la l\xF3gica del carrusel.
   * Se debe llamar cada vez que el DOM se actualiza.
   */
  function initSlider() {
    // 1. Las selecciones de DOM deben estar DENTRO de la funci\xF3n
    //    para que apunten a los elementos NUEVOS despu\xE9s del swap.
    const slider = document.querySelector("#slider");
    const sliderContainer = slider?.querySelector("div");
    
    // Si no encuentra el carrusel (ej: est\xE1s en otra p\xE1gina), sal de la funci\xF3n.
    if (!slider || !sliderContainer) return; 

    const childsSlider = [...slider.querySelectorAll("figure")];
    const nextButton = document.querySelector("[data-button='next']");
    const prevButton = document.querySelector("[data-button='prev']");
    const lengthImages = childsSlider.length;
    let currentIndex = 0;

    const updateSlider = () => {
      const offset = currentIndex * 100;
      sliderContainer.style.transform = \`translateX(-\${offset}%)\`;
    };
    
    // **Importante:** Limpia cualquier listener anterior si es necesario.
    // En este caso, como los botones se reemplazan, no es estrictamente necesario,
    // pero es buena pr\xE1ctica si el script se ejecuta m\xE1s de una vez sin un DOM nuevo.

    // 2. Asignaci\xF3n de eventos a los nuevos botones
    nextButton?.addEventListener("click", function (e) {
      currentIndex++;
      if (currentIndex >= lengthImages) {
        currentIndex = 0;
      }
      updateSlider();
    });

    prevButton?.addEventListener("click", function (e) {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = lengthImages - 1;
      }
      updateSlider();
    });
  }

  // Ejecutar en la carga inicial
  initSlider();

  // Ejecutar despu\xE9s de cada navegaci\xF3n/swap (incluyendo saltos de ancla con View Transitions)
  document.addEventListener('astro:after-swap', initSlider);
<\/script>`], ["", `<section \xA0 id="slider" \xA0 class="relative w-full max-w-screen-lg mx-auto overflow-hidden rounded-lg animate-blurred-fade-in aspect-video"> <div class="flex h-full w-full transition-transform duration-500 ease-in-out"> <figure class="flex-shrink-0 w-full h-full relative" data-active> <img \xA0 \xA0 \xA0 \xA0 src="../../public/images/IDI-slider-1.jpg" \xA0 \xA0 \xA0 \xA0 alt="IDI slider 1" \xA0 \xA0 \xA0 \xA0 class="w-full h-full block object-cover" \xA0 \xA0 \xA0> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> </figure> <figure class="flex-shrink-0 w-full h-full relative"> <img \xA0 \xA0 \xA0 \xA0 src="../../public/images/IDI-slider-2.jpg" \xA0 \xA0 \xA0 \xA0 alt="IDI slider 2" \xA0 \xA0 \xA0 \xA0 class="w-full h-full block object-cover" \xA0 \xA0 \xA0> <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div> </figure> </div> <button \xA0 \xA0 class="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors duration-300 backdrop-blur-sm focus:outline-none" \xA0 \xA0 data-button="prev" \xA0> <svg \xA0 \xA0 \xA0 class="w-8 h-8 text-white" \xA0 \xA0 \xA0 fill="none" \xA0 \xA0 \xA0 stroke="currentColor" \xA0 \xA0 \xA0 viewBox="0 0 24 24" \xA0 \xA0 \xA0 xmlns="http://www.w3.org/2000/svg" \xA0 \xA0> <path \xA0 \xA0 \xA0 \xA0 stroke-linecap="round" \xA0 \xA0 \xA0 \xA0 stroke-linejoin="round" \xA0 \xA0 \xA0 \xA0 stroke-width="2" \xA0 \xA0 \xA0 \xA0 d="M15 19l-7-7 7-7" \xA0 \xA0 \xA0></path> </svg> </button> <button \xA0 \xA0 class="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors duration-300 backdrop-blur-sm focus:outline-none" \xA0 \xA0 data-button="next" \xA0> <svg \xA0 \xA0 \xA0 class="w-8 h-8 text-white" \xA0 \xA0 \xA0 fill="none" \xA0 \xA0 \xA0 stroke="currentColor" \xA0 \xA0 \xA0 viewBox="0 0 24 24" \xA0 \xA0 \xA0 xmlns="http://www.w3.org/2000/svg" \xA0 \xA0> <path \xA0 \xA0 \xA0 \xA0 stroke-linecap="round" \xA0 \xA0 \xA0 \xA0 stroke-linejoin="round" \xA0 \xA0 \xA0 \xA0 stroke-width="2" \xA0 \xA0 \xA0 \xA0 d="M9 5l7 7-7 7" \xA0 \xA0 \xA0></path> </svg> </button> </section> <script>
  /**
   * Funci\xF3n que inicializa toda la l\xF3gica del carrusel.
   * Se debe llamar cada vez que el DOM se actualiza.
   */
  function initSlider() {
    // 1. Las selecciones de DOM deben estar DENTRO de la funci\xF3n
    //    para que apunten a los elementos NUEVOS despu\xE9s del swap.
    const slider = document.querySelector("#slider");
    const sliderContainer = slider?.querySelector("div");
    
    // Si no encuentra el carrusel (ej: est\xE1s en otra p\xE1gina), sal de la funci\xF3n.
    if (!slider || !sliderContainer) return; 

    const childsSlider = [...slider.querySelectorAll("figure")];
    const nextButton = document.querySelector("[data-button='next']");
    const prevButton = document.querySelector("[data-button='prev']");
    const lengthImages = childsSlider.length;
    let currentIndex = 0;

    const updateSlider = () => {
      const offset = currentIndex * 100;
      sliderContainer.style.transform = \\\`translateX(-\\\${offset}%)\\\`;
    };
    
    // **Importante:** Limpia cualquier listener anterior si es necesario.
    // En este caso, como los botones se reemplazan, no es estrictamente necesario,
    // pero es buena pr\xE1ctica si el script se ejecuta m\xE1s de una vez sin un DOM nuevo.

    // 2. Asignaci\xF3n de eventos a los nuevos botones
    nextButton?.addEventListener("click", function (e) {
      currentIndex++;
      if (currentIndex >= lengthImages) {
        currentIndex = 0;
      }
      updateSlider();
    });

    prevButton?.addEventListener("click", function (e) {
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = lengthImages - 1;
      }
      updateSlider();
    });
  }

  // Ejecutar en la carga inicial
  initSlider();

  // Ejecutar despu\xE9s de cada navegaci\xF3n/swap (incluyendo saltos de ancla con View Transitions)
  document.addEventListener('astro:after-swap', initSlider);
<\/script>`])), maybeRenderHead());
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/components/Slider.astro", void 0);

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { url, title, description, page } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="max-w-sm mb-14 bg-white border border-gray-200 rounded-lg shadow-sm transition-transform duration-300 hover:scale-98 hover:shadow-lg"> <a${addAttribute(page, "href")}> <img class="rounded-t-lg"${addAttribute(url, "src")} alt=""> </a> <div class="p-5"> <a${addAttribute(page, "href")}> <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 transition-colors duration-300 hover:text-indigo-600"> ${title} </h5> </a> <div class="prose"> <p class="mb-3 font-normal text-gray-700"> ${description} </p> </div> <a${addAttribute(page, "href")} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg transition-colors duration-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
Mas Informacion
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path> </svg> </a> </div> </div>`;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/components/Card.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "IDI - Bienvenido" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<main class="container mx-auto px-4 pt-20 animate-blurred-fade-in"> <div class="grid place-items-center animate-blurred-fade-in py-10"> <div class="flex flex-col items-center text-center gap-2"> <h1 class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-blue-600 transition-colors duration-300 hover:text-indigo-600">\nInstituto de Inmunolog\xEDa <br> <span class="text-gray-900 transition-colors duration-300 hover:text-indigo-600">\n"Dr. Nicol\xE1s E. Bianco Colmenares" (IDI - UCV)\n</span> </h1> <h2 class="text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl transition-colors duration-300 hover:text-indigo-600">\nEntre los siete Institutos de la Facultad de Medicina <span class="text-blue-600 transition-colors duration-300 hover:text-indigo-600">\n"el m\xE1s joven"\n</span> </h2> </div> </div> <div class="py-4"> ', ' </div> <div class="py-8"> ', ' </div> <section id="servicios" class="grid gap-4 py-8 text-center scroll-mt-20"> <h1 class="text-5xl md:text-6xl lg:text-8xl font-bold transition-colors duration-300 hover:text-indigo-600">\nTe ofrecemos <span class="text-blue-600 transition-colors duration-300 hover:text-indigo-600">los mejores servicios</span> </h1> <h2 class="text-2xl md:text-3xl lg:text-4xl font-normal transition-colors duration-300 hover:text-indigo-600">\natendemos tus necesidades\n</h2> </section> <div class=""> <div class="relative overflow-hidden mx-auto max-w-screen-xl"> <div id="cards-container" class="flex transition-transform duration-500 ease-in-out gap-6"> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> </div> <button id="prev-btn" class="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 bg-white/50 hover:bg-white/75 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="next-btn" class="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 bg-white/50 hover:bg-white/75 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> <div class="py-8"> ', ' </div> <section id="ubicacion" class="py-12 text-center animate-blurred-fade-in scroll-mt-20 relative overflow-hidden"> <span class="hidden lg:block absolute left-[-10px] top-1/2 transform -translate-y-1/2 rotate-90 text-[7rem] font-extrabold text-blue-200 opacity-50 select-none pointer-events-none">\nIDI\n</span> <h2 class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-900 mb-8 transition-colors duration-300 hover:text-blue-600">\nNuestra Ubicaci\xF3n\n</h2> <p class="mt-4 text-lg text-gray-600 mb-4">\nVis\xEDtanos en nuestra sede. \xA1Te esperamos!\n</p> <div class="relative max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.110328394241!2d-66.8956476241258!3d10.491968264374478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58d73bc1f427%3A0x301550da9a607d3c!2sInstituto%20de%20Inmunolog%C3%ADa%20%22Dr.%20Nicol%C3%A1s%20Bianco%20Colmenares%22%20(IDI)%20-%20UCV!5e0!3m2!1ses!2sve!4v1758846958491!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> <span class="hidden lg:block absolute right-[-10px] top-1/2 transform -translate-y-1/2 -rotate-90 text-[7rem] font-extrabold text-indigo-200 opacity-50 select-none pointer-events-none">\nUCV\n</span> </section> <div class="py-8"> ', ' </div> <section id="horarios" class="py-12 text-center animate-blurred-fade-in scroll-mt-20"> <span class="hidden lg:block absolute left-[-10px] top-1/2 transform -translate-y-1/2 rotate-90 text-[7rem] font-extrabold text-blue-200 opacity-50 select-none pointer-events-none">\nUCV\n</span> <h2 class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-900 mb-8 transition-colors duration-300 hover:text-indigo-600">\nNuestros Horarios\n</h2> <div class="prose mx-auto"> <p class="mt-4 text-lg text-gray-600 mb-8 max-w-2xl mx-auto">\nTe ofrecemos atenci\xF3n de lunes a viernes en los siguientes horarios.\n          Por favor, toma en cuenta que las consultas y el laboratorio pueden\n          tener horas espec\xEDficas.\n</p> </div> <div class="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100"> <div class="space-y-4"> <div class="flex justify-between items-center border-b pb-2"> <span class="text-xl font-semibold text-blue-600">D\xEDas de Atenci\xF3n:</span> <span class="text-xl font-medium text-gray-800">Lunes a Viernes</span> </div> <div class="flex justify-between items-center border-b pb-2"> <span class="text-lg font-medium text-gray-700">Consulta M\xE9dica:</span> <span class="text-lg font-bold text-indigo-600">8:00 AM - 12:00 PM</span> </div> <div class="flex justify-between items-center border-b pb-2"> <span class="text-lg font-medium text-gray-700">Recepci\xF3n de Laboratorio:</span> <span class="text-lg font-bold text-indigo-600">7:00 AM - 11:00 AM</span> </div> <div class="flex justify-between items-center"> <span class="text-lg font-medium text-gray-700">Entrega de Resultados:</span> <span class="text-lg font-bold text-indigo-600">1:00 PM - 3:00 PM</span> </div> </div> <p class="mt-6 text-sm text-gray-500 italic">\n*Horarios sujetos a cambios. Se recomienda confirmar por tel\xE9fono para\n          procedimientos especiales.\n</p> </div> <span class="hidden lg:block absolute right-[-10px] top-1/2 transform -translate-y-1/2 -rotate-90 text-[7rem] font-extrabold text-indigo-200 opacity-50 select-none pointer-events-none">\nIDI\n</span> </section> <div class="py-8"> ', ` </div> <section id="contacto" class="flex flex-col items-center justify-center py-12 text-center animate-blurred-fade-in scroll-mt-20"> <h2 class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-900 transition-colors duration-300 hover:text-blue-600">
Cont\xE1ctanos
</h2> <p class="mt-4 text-xl font-normal text-gray-600 md:text-2xl">
Estamos aqu\xED para ayudarte. Cont\xE1ctanos **v\xEDa email o llamada local**.
        (Los n\xFAmeros no poseen Whatsapp).
</p> <div class="mt-8 flex flex-col items-center space-y-4"> <div class="flex items-center space-x-2 transition-colors duration-300 hover:text-blue-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 transition-colors duration-300 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a href="mailto:laboratorio.idiucv@gmail.com" class="text-lg font-medium text-gray-900 transition-colors duration-300 hover:text-blue-600">
laboratorio.idiucv@gmail.com
</a> </div> <div class="flex items-center space-x-2 transition-colors duration-300 hover:text-blue-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 transition-colors duration-300 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-lg font-medium text-gray-900"> 0212-6053509 </span> </div> <div class="flex items-center space-x-2 transition-colors duration-300 hover:text-blue-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 transition-colors duration-300 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-lg font-medium text-gray-900"> 0212-6053508 </span> </div> </div> </section> </main> <script>
    /**
     * Funci\xF3n que encapsula toda la l\xF3gica de inicializaci\xF3n del slider.
     */
    function initCardSlider() {
      // 1. Las selecciones de DOM deben estar DENTRO de la funci\xF3n
      // \xA0 \xA0para asegurar que se obtienen los nuevos elementos despu\xE9s del swap.
      const cardsContainer = document.getElementById("cards-container");
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn"); // Salir si los elementos principales no existen en la p\xE1gina actual

      if (!cardsContainer || !prevBtn || !nextBtn) return;

      const cards = [...cardsContainer.querySelectorAll(".flex-shrink-0")];
      const totalCards = cards.length;
      let currentIndex = 0; // --- L\xF3gica de c\xE1lculo y movimiento ---

      const getCardsToShow = () => {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 640) return 2;
        return 1;
      };

      const updateSlider = () => {
        // Aseg\xFArate de que cards[0] exista antes de acceder a offsetWidth
        if (cards.length === 0) return;
        const cardWidth = cards[0].offsetWidth; // 24px es el gap (asumiendo que viene de Tailwind, ej. gap-6)
        const offset = currentIndex * (cardWidth + 24);
        cardsContainer.style.transform = \`translateX(-\${offset}px)\`;
      }; // --- L\xF3gica de Eventos ---
      // La funci\xF3n interna para el resize necesita ser nombrada o almacenada
      // para poder manejar la limpieza de eventos si se estuviera usando transition:persist.
      // Sin embargo, como el DOM se reemplaza, podemos reasignar.
      // Botones de navegaci\xF3n
      nextBtn.onclick = () => {
        const cardsToShow = getCardsToShow();
        if (currentIndex >= totalCards - cardsToShow) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
        updateSlider();
      };

      prevBtn.onclick = () => {
        const cardsToShow = getCardsToShow();
        if (currentIndex <= 0) {
          currentIndex = totalCards - cardsToShow;
        } else {
          currentIndex--;
        }
        updateSlider();
      }; // Manejo de la funci\xF3n de redimensionamiento (resize)
      // Es CR\xCDTICO que al re-inicializar el script, el listener de resize
      // no se a\xF1ada m\xFAltiples veces. Usaremos un 'flag' o una funci\xF3n con nombre
      // o simplemente reasignaci\xF3n de eventos para los botones.
      // Para el evento 'resize' del window, es mejor mantener un solo listener global.
      // Aqu\xED inicializamos y llamamos updateSlider() para la posici\xF3n inicial.
      updateSlider(); // El listener de resize se a\xF1ade UNA SOLA VEZ globalmente, fuera de la funci\xF3n,
      // o tienes que gestionar la remoci\xF3n del listener anterior.
      // Para simplificar, lo dejamos dentro, pero debemos prevenir duplicados.
      // Limpieza de event listeners de window (por si se llama m\xE1s de una vez)
      // Para evitar que el listener de 'resize' se acumule con cada swap:
      window.removeEventListener("resize", handleResize);

      function handleResize() {
        currentIndex = 0;
        updateSlider();
      }
      window.addEventListener("resize", handleResize);
    } // ------------------- INICIALIZACI\xD3N DE ASTRO -------------------
    // 1. Ejecutar en la carga inicial (reemplaza 'DOMContentLoaded')

    initCardSlider(); // 2. Ejecutar despu\xE9s de cada navegaci\xF3n cliente-side

    document.addEventListener("astro:after-swap", initCardSlider);
  <\/script> `], [" ", " ", '<main class="container mx-auto px-4 pt-20 animate-blurred-fade-in"> <div class="grid place-items-center animate-blurred-fade-in py-10"> <div class="flex flex-col items-center text-center gap-2"> <h1 class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-blue-600 transition-colors duration-300 hover:text-indigo-600">\nInstituto de Inmunolog\xEDa <br> <span class="text-gray-900 transition-colors duration-300 hover:text-indigo-600">\n"Dr. Nicol\xE1s E. Bianco Colmenares" (IDI - UCV)\n</span> </h1> <h2 class="text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl transition-colors duration-300 hover:text-indigo-600">\nEntre los siete Institutos de la Facultad de Medicina <span class="text-blue-600 transition-colors duration-300 hover:text-indigo-600">\n"el m\xE1s joven"\n</span> </h2> </div> </div> <div class="py-4"> ', ' </div> <div class="py-8"> ', ' </div> <section id="servicios" class="grid gap-4 py-8 text-center scroll-mt-20"> <h1 class="text-5xl md:text-6xl lg:text-8xl font-bold transition-colors duration-300 hover:text-indigo-600">\nTe ofrecemos <span class="text-blue-600 transition-colors duration-300 hover:text-indigo-600">los mejores servicios</span> </h1> <h2 class="text-2xl md:text-3xl lg:text-4xl font-normal transition-colors duration-300 hover:text-indigo-600">\natendemos tus necesidades\n</h2> </section> <div class=""> <div class="relative overflow-hidden mx-auto max-w-screen-xl"> <div id="cards-container" class="flex transition-transform duration-500 ease-in-out gap-6"> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> <div class="flex-shrink-0 w-full sm:w-1/2 lg:w-[calc(25%-18px)]"> ', ' </div> </div> <button id="prev-btn" class="absolute top-1/2 left-4 -translate-y-1/2 rounded-full p-2 bg-white/50 hover:bg-white/75 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path> </svg> </button> <button id="next-btn" class="absolute top-1/2 right-4 -translate-y-1/2 rounded-full p-2 bg-white/50 hover:bg-white/75 transition"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> <div class="py-8"> ', ' </div> <section id="ubicacion" class="py-12 text-center animate-blurred-fade-in scroll-mt-20 relative overflow-hidden"> <span class="hidden lg:block absolute left-[-10px] top-1/2 transform -translate-y-1/2 rotate-90 text-[7rem] font-extrabold text-blue-200 opacity-50 select-none pointer-events-none">\nIDI\n</span> <h2 class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-900 mb-8 transition-colors duration-300 hover:text-blue-600">\nNuestra Ubicaci\xF3n\n</h2> <p class="mt-4 text-lg text-gray-600 mb-4">\nVis\xEDtanos en nuestra sede. \xA1Te esperamos!\n</p> <div class="relative max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.110328394241!2d-66.8956476241258!3d10.491968264374478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58d73bc1f427%3A0x301550da9a607d3c!2sInstituto%20de%20Inmunolog%C3%ADa%20%22Dr.%20Nicol%C3%A1s%20Bianco%20Colmenares%22%20(IDI)%20-%20UCV!5e0!3m2!1ses!2sve!4v1758846958491!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </div> <span class="hidden lg:block absolute right-[-10px] top-1/2 transform -translate-y-1/2 -rotate-90 text-[7rem] font-extrabold text-indigo-200 opacity-50 select-none pointer-events-none">\nUCV\n</span> </section> <div class="py-8"> ', ' </div> <section id="horarios" class="py-12 text-center animate-blurred-fade-in scroll-mt-20"> <span class="hidden lg:block absolute left-[-10px] top-1/2 transform -translate-y-1/2 rotate-90 text-[7rem] font-extrabold text-blue-200 opacity-50 select-none pointer-events-none">\nUCV\n</span> <h2 class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-900 mb-8 transition-colors duration-300 hover:text-indigo-600">\nNuestros Horarios\n</h2> <div class="prose mx-auto"> <p class="mt-4 text-lg text-gray-600 mb-8 max-w-2xl mx-auto">\nTe ofrecemos atenci\xF3n de lunes a viernes en los siguientes horarios.\n          Por favor, toma en cuenta que las consultas y el laboratorio pueden\n          tener horas espec\xEDficas.\n</p> </div> <div class="max-w-md mx-auto bg-white p-6 rounded-xl shadow-lg border border-gray-100"> <div class="space-y-4"> <div class="flex justify-between items-center border-b pb-2"> <span class="text-xl font-semibold text-blue-600">D\xEDas de Atenci\xF3n:</span> <span class="text-xl font-medium text-gray-800">Lunes a Viernes</span> </div> <div class="flex justify-between items-center border-b pb-2"> <span class="text-lg font-medium text-gray-700">Consulta M\xE9dica:</span> <span class="text-lg font-bold text-indigo-600">8:00 AM - 12:00 PM</span> </div> <div class="flex justify-between items-center border-b pb-2"> <span class="text-lg font-medium text-gray-700">Recepci\xF3n de Laboratorio:</span> <span class="text-lg font-bold text-indigo-600">7:00 AM - 11:00 AM</span> </div> <div class="flex justify-between items-center"> <span class="text-lg font-medium text-gray-700">Entrega de Resultados:</span> <span class="text-lg font-bold text-indigo-600">1:00 PM - 3:00 PM</span> </div> </div> <p class="mt-6 text-sm text-gray-500 italic">\n*Horarios sujetos a cambios. Se recomienda confirmar por tel\xE9fono para\n          procedimientos especiales.\n</p> </div> <span class="hidden lg:block absolute right-[-10px] top-1/2 transform -translate-y-1/2 -rotate-90 text-[7rem] font-extrabold text-indigo-200 opacity-50 select-none pointer-events-none">\nIDI\n</span> </section> <div class="py-8"> ', ` </div> <section id="contacto" class="flex flex-col items-center justify-center py-12 text-center animate-blurred-fade-in scroll-mt-20"> <h2 class="text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-gray-900 transition-colors duration-300 hover:text-blue-600">
Cont\xE1ctanos
</h2> <p class="mt-4 text-xl font-normal text-gray-600 md:text-2xl">
Estamos aqu\xED para ayudarte. Cont\xE1ctanos **v\xEDa email o llamada local**.
        (Los n\xFAmeros no poseen Whatsapp).
</p> <div class="mt-8 flex flex-col items-center space-y-4"> <div class="flex items-center space-x-2 transition-colors duration-300 hover:text-blue-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 transition-colors duration-300 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a href="mailto:laboratorio.idiucv@gmail.com" class="text-lg font-medium text-gray-900 transition-colors duration-300 hover:text-blue-600">
laboratorio.idiucv@gmail.com
</a> </div> <div class="flex items-center space-x-2 transition-colors duration-300 hover:text-blue-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 transition-colors duration-300 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-lg font-medium text-gray-900"> 0212-6053509 </span> </div> <div class="flex items-center space-x-2 transition-colors duration-300 hover:text-blue-600"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-900 transition-colors duration-300 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <span class="text-lg font-medium text-gray-900"> 0212-6053508 </span> </div> </div> </section> </main> <script>
    /**
     * Funci\xF3n que encapsula toda la l\xF3gica de inicializaci\xF3n del slider.
     */
    function initCardSlider() {
      // 1. Las selecciones de DOM deben estar DENTRO de la funci\xF3n
      // \xA0 \xA0para asegurar que se obtienen los nuevos elementos despu\xE9s del swap.
      const cardsContainer = document.getElementById("cards-container");
      const prevBtn = document.getElementById("prev-btn");
      const nextBtn = document.getElementById("next-btn"); // Salir si los elementos principales no existen en la p\xE1gina actual

      if (!cardsContainer || !prevBtn || !nextBtn) return;

      const cards = [...cardsContainer.querySelectorAll(".flex-shrink-0")];
      const totalCards = cards.length;
      let currentIndex = 0; // --- L\xF3gica de c\xE1lculo y movimiento ---

      const getCardsToShow = () => {
        if (window.innerWidth >= 1024) return 4;
        if (window.innerWidth >= 640) return 2;
        return 1;
      };

      const updateSlider = () => {
        // Aseg\xFArate de que cards[0] exista antes de acceder a offsetWidth
        if (cards.length === 0) return;
        const cardWidth = cards[0].offsetWidth; // 24px es el gap (asumiendo que viene de Tailwind, ej. gap-6)
        const offset = currentIndex * (cardWidth + 24);
        cardsContainer.style.transform = \\\`translateX(-\\\${offset}px)\\\`;
      }; // --- L\xF3gica de Eventos ---
      // La funci\xF3n interna para el resize necesita ser nombrada o almacenada
      // para poder manejar la limpieza de eventos si se estuviera usando transition:persist.
      // Sin embargo, como el DOM se reemplaza, podemos reasignar.
      // Botones de navegaci\xF3n
      nextBtn.onclick = () => {
        const cardsToShow = getCardsToShow();
        if (currentIndex >= totalCards - cardsToShow) {
          currentIndex = 0;
        } else {
          currentIndex++;
        }
        updateSlider();
      };

      prevBtn.onclick = () => {
        const cardsToShow = getCardsToShow();
        if (currentIndex <= 0) {
          currentIndex = totalCards - cardsToShow;
        } else {
          currentIndex--;
        }
        updateSlider();
      }; // Manejo de la funci\xF3n de redimensionamiento (resize)
      // Es CR\xCDTICO que al re-inicializar el script, el listener de resize
      // no se a\xF1ada m\xFAltiples veces. Usaremos un 'flag' o una funci\xF3n con nombre
      // o simplemente reasignaci\xF3n de eventos para los botones.
      // Para el evento 'resize' del window, es mejor mantener un solo listener global.
      // Aqu\xED inicializamos y llamamos updateSlider() para la posici\xF3n inicial.
      updateSlider(); // El listener de resize se a\xF1ade UNA SOLA VEZ globalmente, fuera de la funci\xF3n,
      // o tienes que gestionar la remoci\xF3n del listener anterior.
      // Para simplificar, lo dejamos dentro, pero debemos prevenir duplicados.
      // Limpieza de event listeners de window (por si se llama m\xE1s de una vez)
      // Para evitar que el listener de 'resize' se acumule con cada swap:
      window.removeEventListener("resize", handleResize);

      function handleResize() {
        currentIndex = 0;
        updateSlider();
      }
      window.addEventListener("resize", handleResize);
    } // ------------------- INICIALIZACI\xD3N DE ASTRO -------------------
    // 1. Ejecutar en la carga inicial (reemplaza 'DOMContentLoaded')

    initCardSlider(); // 2. Ejecutar despu\xE9s de cada navegaci\xF3n cliente-side

    document.addEventListener("astro:after-swap", initCardSlider);
  <\/script> `])), renderComponent($$result2, "Nav", $$Nav, {}), maybeRenderHead(), renderComponent($$result2, "Slider", $$Slider, {}), renderComponent($$result2, "Divider", $$Divider, { "title": "" }), renderComponent($$result2, "Card", $$Card, { "url": "/images/consulta.png", "title": "Consulta", "description": "Pod\xE9s usar el mismo componente en varias ocasiones con distintos contenidos.", "page": "/consulta" }), renderComponent($$result2, "Card", $$Card, { "url": "/images/laboratorio.png", "title": "Laboratorio", "description": "Pod\xE9s usar el mismo componente en varias ocasiones con distintos contenidos.", "page": "/laboratorio" }), renderComponent($$result2, "Card", $$Card, { "url": "/images/espirometria.png", "title": "Espirometria", "description": "Pod\xE9s usar el mismo componente en varias ocasiones con distintos contenidos.", "page": "/espirometria" }), renderComponent($$result2, "Card", $$Card, { "url": "/images/Informe.png", "title": "Informe Alto Costo", "description": "Pod\xE9s usar el mismo componente en varias ocasiones con distintos contenidos.", "page": "/informe-alto-costo" }), renderComponent($$result2, "Card", $$Card, { "url": "/images/Prick.png", "title": "PRICK", "description": "Pod\xE9s usar el mismo componente en varias ocasiones con distintos contenidos.", "page": "/prick" }), renderComponent($$result2, "Card", $$Card, { "url": "/images/espirometria.png", "title": "Prueba Epicutanea (Parche)", "description": "Pod\xE9s usar el mismo componente en varias ocasiones con distintos contenidos.", "page": "/prueba-epicutanea" }), renderComponent($$result2, "Card", $$Card, { "url": "/images/Provocacion.png", "title": "Prueba de Provocacion", "description": "Pod\xE9s usar el mismo componente en varias ocasiones con distintos contenidos.", "page": "/prueba-provocacion" }), renderComponent($$result2, "Card", $$Card, { "url": "/images/Autologo.png", "title": "Suero Autologo", "description": "Pod\xE9s usar el mismo componente en varias ocasiones con distintos contenidos.", "page": "/suero-autologo" }), renderComponent($$result2, "Card", $$Card, { "url": "/images/Parenteral.png", "title": "Tratamiento Parenteral", "description": "Pod\xE9s usar el mismo componente en varias ocasiones con distintos contenidos.", "page": "/tratamiento-parenteral" }), renderComponent($$result2, "Divider", $$Divider, { "title": "" }), renderComponent($$result2, "Divider", $$Divider, { "title": "" }), renderComponent($$result2, "Divider", $$Divider, { "title": "" })) })}`;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/index.astro", void 0);

const $$file = "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
