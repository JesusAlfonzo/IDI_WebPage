import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_lXlQOuMh.mjs';
/* empty css                                  */
import { $ as $$Layout, a as $$Nav } from '../chunks/Nav_CtxZ6kaV.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "about" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${maybeRenderHead()}<h1>hola esto es un about</h1> ` })}`;
}, "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/about.astro", void 0);

const $$file = "C:/Users/Jesus.Alfonzo/Documents/work/IDI_WebPage/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
