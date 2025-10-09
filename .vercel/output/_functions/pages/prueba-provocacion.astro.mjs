import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, u as unescapeHTML } from '../chunks/astro/server_lXlQOuMh.mjs';
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_CtxZ6kaV.mjs';
import { $ as $$Divider } from '../chunks/Divider_ZBdTZHIC.mjs';
export { renderers } from '../renderers.mjs';

const $$PruebaProvocacion = createComponent(($$result, $$props, $$slots) => {
  const serviceData = {
    title: "Prueba de Provocaci\xF3n Oral / Nasal",
    description: "M\xE9todo diagn\xF3stico supervisado para confirmar alergias a alimentos o medicamentos, administrando dosis crecientes del al\xE9rgeno en un ambiente seguro.",
    prerequisites: [
      "Orden m\xE9dica original y justificaci\xF3n detallada.",
      "C\xE9dula de identidad laminada.",
      "Ayuno y suspensi\xF3n de antihistam\xEDnicos (seg\xFAn protocolo estricto).",
      "Vigilancia de un acompa\xF1ante adulto durante y despu\xE9s del procedimiento."
    ],
    stepByStep: [
      "Preparaci\xF3n: Monitoreo de signos vitales basales.",
      "Administraci\xF3n: El al\xE9rgeno se administra en dosis peque\xF1as y crecientes, bajo estricta vigilancia m\xE9dica.",
      "Observaci\xF3n: Se monitorea al paciente durante varias horas tras la \xFAltima dosis.",
      "Diagn\xF3stico: El m\xE9dico confirma o descarta la alergia en base a la reacci\xF3n."
    ],
    schedule: [
      { day: "D\xEDas Espec\xEDficos", time: "Requiere Cita Previa" },
      { day: "Duraci\xF3n", time: "M\xEDnimo 4 - 6 horas" }
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
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/prueba-provocacion.astro", void 0);

const $$file = "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/prueba-provocacion.astro";
const $$url = "/prueba-provocacion";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$PruebaProvocacion,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
