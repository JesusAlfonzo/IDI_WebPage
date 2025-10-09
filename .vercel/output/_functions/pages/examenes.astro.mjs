import { c as createComponent, d as createAstro, a as renderTemplate, f as defineScriptVars, m as maybeRenderHead, r as renderComponent, b as addAttribute } from '../chunks/astro/server_lXlQOuMh.mjs';
import { g as getCollection } from '../chunks/_astro_content_C14GSG_4.mjs';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_CtxZ6kaV.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$SearchExams = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SearchExams;
  const { allExamenes } = Astro2.props;
  const examenesJson = JSON.stringify(allExamenes.map((examen) => ({
    title: examen.data.title,
    description: examen.data.description,
    category: examen.data.category,
    tipoExamen: examen.data.tipoExamen,
    price: examen.data.price,
    slug: examen.slug
  })));
  return renderTemplate(_a || (_a = __template(["", '<div id="search-container" class="mb-12"> <!-- Barra de b\xFAsqueda --> <div class="relative max-w-2xl mx-auto mb-8"> <input type="text" id="search-input" placeholder="Buscar por nombre, descripci\xF3n o categor\xEDa..." class="w-full p-4 pl-12 text-lg border-2 border-indigo-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition duration-150 shadow-md"> <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> <!-- Contenedor donde se mostrar\xE1n los resultados de la b\xFAsqueda --> <div id="search-results" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style="display: none;"> <!-- Los resultados se inyectar\xE1n aqu\xED mediante JavaScript --> </div> <!-- Mensaje de no resultados --> <div id="no-results" class="hidden max-w-2xl mx-auto text-center p-8 bg-yellow-50 rounded-xl border border-yellow-200"> <p class="text-xl text-yellow-800 font-semibold">\n\u{1F937}\u200D\u2642\uFE0F No se encontraron ex\xE1menes que coincidan con tu b\xFAsqueda.\n</p> <p class="text-gray-600 mt-2">Intenta usar t\xE9rminos m\xE1s generales o revisa la ortograf\xEDa.</p> </div> </div> <script>(function(){', `
    // Parsear los datos de Astro
    const allExamenes = JSON.parse(examenesJson);
    
    // Referencias a elementos del DOM
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const noResults = document.getElementById('no-results');
    const categorySections = document.querySelectorAll('.category-section');

    /**
     * Funci\xF3n para crear el HTML de una tarjeta de examen.
     * Es la misma estructura que usas en index.astro.
     */
    function createExamenCard(examen) {
        const priceFormatted = examen.price.toLocaleString('es-ES', { style: 'currency', currency: 'USD' });
        
        return \`
            <a 
                href="/examenes/\${examen.slug}" 
                class="block p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition duration-300 border-t-4 border-blue-500 "
            >
                <h3 class="text-xl font-bold text-gray-800 mb-2">\${examen.title}</h3>
                <p class="text-sm text-gray-600 mb-3 line-clamp-2">\${examen.description}</p>
                <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span class="text-sm font-semibold text-blue-600 uppercase">\${examen.tipoExamen}</span>
                    <span class="text-lg font-extrabold text-green-700">
                        \${priceFormatted}
                    </span>
                </div>
            </a>
        \`;
    }

    // Escuchar el evento de entrada en la barra de b\xFAsqueda
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        
        if (query.length < 2) {
            // Mostrar las secciones originales y ocultar los resultados
            categorySections.forEach(section => section.style.display = 'block');
            searchResults.style.display = 'none';
            noResults.classList.add('hidden');
            return;
        }

        // 1. Filtrar los ex\xE1menes
        const filteredExamenes = allExamenes.filter(examen => {
            const searchFields = [
                examen.title,
                examen.description,
                examen.category,
                examen.tipoExamen
            ].join(' ').toLowerCase();
            
            return searchFields.includes(query);
        });

        // 2. Mostrar/Ocultar elementos seg\xFAn el filtro
        if (filteredExamenes.length > 0) {
            // Ocultar las secciones originales
            categorySections.forEach(section => section.style.display = 'none');
            
            // Mostrar la secci\xF3n de resultados
            searchResults.style.display = 'grid';
            noResults.classList.add('hidden');
            
            // Rellenar resultados
            filteredExamenes.forEach(examen => {
                searchResults.innerHTML += createExamenCard(examen);
            });
            
        } else {
            // Ocultar la secci\xF3n original y mostrar mensaje de no resultados
            categorySections.forEach(section => section.style.display = 'none');
            searchResults.style.display = 'none';
            noResults.classList.remove('hidden');
        }
    });

})();<\/script>`], ["", '<div id="search-container" class="mb-12"> <!-- Barra de b\xFAsqueda --> <div class="relative max-w-2xl mx-auto mb-8"> <input type="text" id="search-input" placeholder="Buscar por nombre, descripci\xF3n o categor\xEDa..." class="w-full p-4 pl-12 text-lg border-2 border-indigo-300 rounded-xl focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition duration-150 shadow-md"> <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> <!-- Contenedor donde se mostrar\xE1n los resultados de la b\xFAsqueda --> <div id="search-results" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style="display: none;"> <!-- Los resultados se inyectar\xE1n aqu\xED mediante JavaScript --> </div> <!-- Mensaje de no resultados --> <div id="no-results" class="hidden max-w-2xl mx-auto text-center p-8 bg-yellow-50 rounded-xl border border-yellow-200"> <p class="text-xl text-yellow-800 font-semibold">\n\u{1F937}\u200D\u2642\uFE0F No se encontraron ex\xE1menes que coincidan con tu b\xFAsqueda.\n</p> <p class="text-gray-600 mt-2">Intenta usar t\xE9rminos m\xE1s generales o revisa la ortograf\xEDa.</p> </div> </div> <script>(function(){', `
    // Parsear los datos de Astro
    const allExamenes = JSON.parse(examenesJson);
    
    // Referencias a elementos del DOM
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const noResults = document.getElementById('no-results');
    const categorySections = document.querySelectorAll('.category-section');

    /**
     * Funci\xF3n para crear el HTML de una tarjeta de examen.
     * Es la misma estructura que usas en index.astro.
     */
    function createExamenCard(examen) {
        const priceFormatted = examen.price.toLocaleString('es-ES', { style: 'currency', currency: 'USD' });
        
        return \\\`
            <a 
                href="/examenes/\\\${examen.slug}" 
                class="block p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition duration-300 border-t-4 border-blue-500 "
            >
                <h3 class="text-xl font-bold text-gray-800 mb-2">\\\${examen.title}</h3>
                <p class="text-sm text-gray-600 mb-3 line-clamp-2">\\\${examen.description}</p>
                <div class="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span class="text-sm font-semibold text-blue-600 uppercase">\\\${examen.tipoExamen}</span>
                    <span class="text-lg font-extrabold text-green-700">
                        \\\${priceFormatted}
                    </span>
                </div>
            </a>
        \\\`;
    }

    // Escuchar el evento de entrada en la barra de b\xFAsqueda
    searchInput.addEventListener('input', (event) => {
        const query = event.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        
        if (query.length < 2) {
            // Mostrar las secciones originales y ocultar los resultados
            categorySections.forEach(section => section.style.display = 'block');
            searchResults.style.display = 'none';
            noResults.classList.add('hidden');
            return;
        }

        // 1. Filtrar los ex\xE1menes
        const filteredExamenes = allExamenes.filter(examen => {
            const searchFields = [
                examen.title,
                examen.description,
                examen.category,
                examen.tipoExamen
            ].join(' ').toLowerCase();
            
            return searchFields.includes(query);
        });

        // 2. Mostrar/Ocultar elementos seg\xFAn el filtro
        if (filteredExamenes.length > 0) {
            // Ocultar las secciones originales
            categorySections.forEach(section => section.style.display = 'none');
            
            // Mostrar la secci\xF3n de resultados
            searchResults.style.display = 'grid';
            noResults.classList.add('hidden');
            
            // Rellenar resultados
            filteredExamenes.forEach(examen => {
                searchResults.innerHTML += createExamenCard(examen);
            });
            
        } else {
            // Ocultar la secci\xF3n original y mostrar mensaje de no resultados
            categorySections.forEach(section => section.style.display = 'none');
            searchResults.style.display = 'none';
            noResults.classList.remove('hidden');
        }
    });

})();<\/script>`])), maybeRenderHead(), defineScriptVars({ examenesJson }));
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/components/searchExams.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allExamenes = await getCollection("examenes");
  const groupedExamenes = allExamenes.reduce((acc, examen) => {
    const category = examen.data.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(examen);
    return acc;
  }, {});
  const categories = Object.keys(groupedExamenes).sort();
  const formatPrice = (price) => {
    return price.toLocaleString("es-ES", { style: "currency", currency: "USD" });
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "IDI - Ex\xE1menes" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 pt-24 pb-16 animate-blurred-fade-in"> <header class="text-center mb-12"> <h1 class="text-5xl font-extrabold leading-tight text-gray-900 mb-4">
Listado de Exámenes
</h1> <p class="text-xl text-gray-600 max-w-2xl mx-auto">
Explora nuestro catálogo de análisis especializados...
</p> </header> <div class="max-w-6xl mx-auto">  ${renderComponent($$result2, "SearchExams", $$SearchExams, { "allExamenes": allExamenes, "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/searchExams.astro", "client:component-export": "default" })}  ${categories.map((category, index) => (
    // Usamos <details> en lugar de <section>
    renderTemplate`<details class="mb-8 category-section group"${addAttribute(category, "key")} 💡 CAMBIO: Se ELIMINA el atributo 'open', lo que asegura que todas las secciones estén colapsadas por defecto.>  <summary class="cursor-pointer list-none py-3 px-4 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition duration-200 border border-indigo-200 shadow-md flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"> <h2 class="text-2xl font-bold text-indigo-700 m-0"> ${category} </h2>   <svg class="w-6 h-6 text-indigo-600 transform transition duration-300 group-open:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> </summary>  <div class="pt-6 pb-2 animate-"> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> ${groupedExamenes[category].map((examen) => (
      // Usamos retorno implícito simple para la tarjeta <a>
      renderTemplate`<a${addAttribute(`/examenes/${examen.slug}`, "href")} class="block p-5 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.01] transition duration-300 border-t-4 border-blue-500"${addAttribute(examen.slug, "key")} Añadida key> <h3 class="text-xl font-bold text-gray-800 mb-2">${examen.data.title}</h3> <p class="text-sm text-gray-600 mb-3 line-clamp-2">${examen.data.description}</p> <div class="flex justify-between items-center pt-2 border-t border-gray-100"> <span class="text-sm font-semibold text-blue-600 uppercase">${examen.data.tipoExamen}</span> <span class="text-lg font-extrabold text-green-700"> ${formatPrice(examen.data.price)} </span> </div> </a>`
    ))} </div> </div> </details>`
  ))} </div> </main> ` })}`;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/examenes/index.astro", void 0);

const $$file = "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/examenes/index.astro";
const $$url = "/examenes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
