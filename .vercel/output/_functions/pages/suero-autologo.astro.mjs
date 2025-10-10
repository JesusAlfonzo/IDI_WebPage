import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_lXlQOuMh.mjs';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_CtxZ6kaV.mjs';
import { $ as $$Divider } from '../chunks/Divider_ZBdTZHIC.mjs';
export { renderers } from '../renderers.mjs';

const $$SueroAutologo = createComponent(($$result, $$props, $$slots) => {
  const serviceData = {
    title: "Obtenci\xF3n de Suero Aut\xF3logo para Tratamiento",
    description: "Preparaci\xF3n de suero enriquecido derivado de la propia sangre del paciente, utilizado en el tratamiento de algunas afecciones autoinmunes y cr\xF3nicas (ej. Urticaria Cr\xF3nica).",
    prerequisites: [
      "Orden m\xE9dica original y consulta previa.",
      "C\xE9dula de identidad laminada.",
      "Estar en ayunas no es necesario, pero s\xED estar bien hidratado."
    ],
    stepByStep: [
      "Toma de Muestra: Se extrae una muestra de sangre del paciente.",
      "Procesamiento: La sangre se centrifuga para obtener el suero aut\xF3logo (el componente terap\xE9utico).",
      "Aplicaci\xF3n / Entrega: El suero se aplica inmediatamente o se entrega bajo las condiciones de almacenamiento adecuadas."
    ],
    schedule: [
      { day: "Lunes a Viernes", time: "7:00 AM - 12:00 PM" },
      { day: "Toma y Procesamiento", time: "7:00 AM - 9:00 AM" }
    ],
    contactInfo: {
      phone: "0212-6053509 / 0212-6053508",
      email: "laboratorio.idiucv@gmail.com"
    }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `IDI - ${serviceData.title}` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<main class="container mx-auto px-4 pt-24 pb-20 animate-blurred-fade-in"> <header class="text-center py-16"> <h1 class="text-5xl font-extrabold leading-none md:text-6xl lg:text-7xl text-blue-600"> ${serviceData.title} </h1> <p class="mt-6 text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto"> ${serviceData.description} </p> </header> <div class="py-8"> ${renderComponent($$result2, "Divider", $$Divider, { "title": "Organiza tu visita" })} </div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-20"> <section id="prerequisitos" class="py-8 space-y-6"> <h2 class="text-4xl font-extrabold text-gray-700 pb-2 mb-6">
Prerequisitos
</h2> <div class="bg-blue-50/70 p-6 rounded-xl space-y-4 border border-gray-200"> <p class="font-semibold text-lg text-blue-700">Asegúrate de traer:</p> <ul class="space-y-3 list-disc list-inside text-gray-600 text-lg"> ${serviceData.prerequisites.map((req) => renderTemplate`<li> <span class="font-medium text-gray-700">${req}</span> </li>`)} </ul> </div> </section> <section id="pasos" class="py-8 space-y-6"> <h2 class="text-4xl font-extrabold text-gray-700 pb-2 mb-6">
Pasos del Proceso
</h2> <div class="bg-indigo-50/70 p-6 rounded-xl border border-gray-200"> <ol class="space-y-6 text-gray-600 text-lg"> ${serviceData.stepByStep.map((step, index) => renderTemplate`<li class="p-4 rounded-lg bg-white/70 border border-gray-200"> <span class="font-bold text-xl text-blue-700 mr-2">${index + 1}.</span> <span class="text-gray-700">${unescapeHTML(step)}</span> </li>`)} </ol> </div> </section> <section id="horarios-contacto" class="py-8 space-y-8"> <h2 class="text-4xl font-extrabold text-gray-700 pb-2 mb-6">
Horarios y Contacto
</h2> <div class="bg-white p-6 rounded-xl border border-gray-200"> <h3 class="text-2xl font-bold text-indigo-700 mb-4">Horario de Atención</h3> <ul class="space-y-4 text-gray-600 text-lg"> ${serviceData.schedule.map((item) => renderTemplate`<li class="flex justify-between border-b border-gray-200 pb-3 last:border-b-0"> <span class="font-semibold text-gray-700">${item.day}</span> <span class="text-blue-700 font-bold">${item.time}</span> </li>`)} </ul> </div> <div class="bg-white p-6 rounded-xl border border-gray-200"> <h3 class="text-2xl font-bold text-blue-700 mb-4">Contáctanos</h3> <p class="text-lg font-medium text-gray-700">Teléfonos:</p> <span class="text-lg font-bold text-blue-700 block mb-4">${serviceData.contactInfo.phone}</span> <p class="text-lg font-medium text-gray-700">Email:</p> <a${addAttribute(`mailto:${serviceData.contactInfo.email}`, "href")} class="text-lg font-bold text-blue-700 hover:underline break-all"> ${serviceData.contactInfo.email} </a> </div> </section> </div> </main> ` })}`;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/suero-autologo.astro", void 0);

const $$file = "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/suero-autologo.astro";
const $$url = "/suero-autologo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SueroAutologo,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
