import { c as createComponent, d as createAstro, m as maybeRenderHead, a as renderTemplate } from './astro/server_lXlQOuMh.mjs';

const $$Astro = createAstro();
const $$Divider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Divider;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<span class="flex items-center"> <span class="h-1 flex-1 bg-gradient-to-r from-transparent to-gray-200"></span> <span class="shrink-0 px-8 text-black prose-xl font-bold">${title}</span> <span class="h-1 flex-1 bg-gradient-to-l from-transparent to-gray-200"></span> </span>`;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/components/Divider.astro", void 0);

export { $$Divider as $ };
