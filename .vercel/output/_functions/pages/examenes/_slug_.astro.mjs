import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead, e as renderSlot } from '../../chunks/astro/server_lXlQOuMh.mjs';
import { g as getCollection } from '../../chunks/_astro_content_C14GSG_4.mjs';
import { $ as $$Layout, a as $$Nav } from '../../chunks/Nav_CtxZ6kaV.mjs';
/* empty css                                     */
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$ExamenLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ExamenLayout;
  const {
    title,
    description,
    category,
    tipoExamen,
    price
  } = Astro2.props;
  const formattedPrice = price ? price.toLocaleString("es-ES", { style: "currency", currency: "USD" }) : "N/A";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 pt-24 pb-12 animate-blurred-fade-in"> <article class="max-w-4xl mx-auto"> <header class="text-center mb-10 border-b-2 border-indigo-200 pb-4"> <p class="text-sm font-semibold uppercase text-indigo-600 mb-2">${category}</p> <h1 class="text-5xl font-extrabold leading-tight text-gray-900 mb-4"> ${title} </h1> <p class="text-xl text-gray-600 italic mb-6"> ${description} </p> <div class="flex justify-center space-x-8 mt-4"> <div class="p-3 bg-blue-50 border-l-4 border-blue-600 rounded-md shadow-sm"> <p class="text-sm font-medium text-gray-500">Tipo de Análisis</p> <p class="text-lg font-bold text-blue-800">${tipoExamen}</p> </div> <div class="p-3 bg-green-50 border-l-4 border-green-600 rounded-md shadow-sm"> <p class="text-sm font-medium text-gray-500">Precio</p> <p class="text-2xl font-extrabold text-green-700">${formattedPrice}</p> </div> </div> </header> <div class="prose prose-lg mx-auto text-gray-700"> ${renderSlot($$result2, $$slots["default"])} </div> <div class="mt-12 text-center"> <a href="/examenes" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-300">
Volver a la lista de Exámenes
</a> </div> </article> </main> ` })} `;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/layouts/ExamenLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const examenes = await getCollection("examenes");
  return examenes.map((examen) => ({
    params: { slug: examen.slug },
    props: { examen }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { examen } = Astro2.props;
  const { Content } = await examen.render();
  return renderTemplate`${renderComponent($$result, "ExamenLayout", $$ExamenLayout, { ...examen.data }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/examenes/[slug].astro", void 0);

const $$file = "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/examenes/[slug].astro";
const $$url = "/examenes/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$slug,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
