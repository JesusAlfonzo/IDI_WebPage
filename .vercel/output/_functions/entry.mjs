import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C_Fy4gs6.mjs';
import { manifest } from './manifest_BPIT_PCI.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/consulta.astro.mjs');
const _page3 = () => import('./pages/consultas.astro.mjs');
const _page4 = () => import('./pages/epicutanea.astro.mjs');
const _page5 = () => import('./pages/espirometria.astro.mjs');
const _page6 = () => import('./pages/examenes/_slug_.astro.mjs');
const _page7 = () => import('./pages/examenes.astro.mjs');
const _page8 = () => import('./pages/informe-alto-costo.astro.mjs');
const _page9 = () => import('./pages/laboratorio.astro.mjs');
const _page10 = () => import('./pages/prick.astro.mjs');
const _page11 = () => import('./pages/prueba-epicutanea.astro.mjs');
const _page12 = () => import('./pages/prueba-provocacion.astro.mjs');
const _page13 = () => import('./pages/quienes-somos.astro.mjs');
const _page14 = () => import('./pages/suero-autologo.astro.mjs');
const _page15 = () => import('./pages/tratamiento-parenteral.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.14.1_@types+node@24_6966d7cbf919482df795af726e27d936/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/consulta.astro", _page2],
    ["src/pages/consultas.astro", _page3],
    ["src/pages/epicutanea.astro", _page4],
    ["src/pages/espirometria.astro", _page5],
    ["src/pages/examenes/[slug].astro", _page6],
    ["src/pages/examenes/index.astro", _page7],
    ["src/pages/informe-alto-costo.astro", _page8],
    ["src/pages/laboratorio.astro", _page9],
    ["src/pages/prick.astro", _page10],
    ["src/pages/prueba-epicutanea.astro", _page11],
    ["src/pages/prueba-provocacion.astro", _page12],
    ["src/pages/quienes-somos.astro", _page13],
    ["src/pages/suero-autologo.astro", _page14],
    ["src/pages/tratamiento-parenteral.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bacc11af-1008-49e6-bb60-d03ff7ec0c43",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
