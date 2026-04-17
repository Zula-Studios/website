import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './_astro/_@astrojs-ssr-adapter-DKsH77_P.js';
import { manifest } from './manifest_DDvamVMm.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/bewerbung.astro.mjs');
const _page3 = () => import('./pages/api/contact.astro.mjs');
const _page4 = () => import('./pages/api/projekt.astro.mjs');
const _page5 = () => import('./pages/blog/_slug_.astro.mjs');
const _page6 = () => import('./pages/blog.astro.mjs');
const _page7 = () => import('./pages/danke.astro.mjs');
const _page8 = () => import('./pages/datenschutz.astro.mjs');
const _page9 = () => import('./pages/impressum.astro.mjs');
const _page10 = () => import('./pages/kampagne/shopify.astro.mjs');
const _page11 = () => import('./pages/karriere/bewerben.astro.mjs');
const _page12 = () => import('./pages/karriere/_slug_.astro.mjs');
const _page13 = () => import('./pages/karriere.astro.mjs');
const _page14 = () => import('./pages/kontakt.astro.mjs');
const _page15 = () => import('./pages/leistungen/individuelle-entwicklung.astro.mjs');
const _page16 = () => import('./pages/leistungen/shopify-migration.astro.mjs');
const _page17 = () => import('./pages/leistungen/shopify-shop-erstellen.astro.mjs');
const _page18 = () => import('./pages/leistungen.astro.mjs');
const _page19 = () => import('./pages/projekt-starten.astro.mjs');
const _page20 = () => import('./pages/referenzen/_slug_.astro.mjs');
const _page21 = () => import('./pages/referenzen.astro.mjs');
const _page22 = () => import('./pages/ueber-uns.astro.mjs');
const _page23 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/bewerbung.ts", _page2],
    ["src/pages/api/contact.ts", _page3],
    ["src/pages/api/projekt.ts", _page4],
    ["src/pages/blog/[slug].astro", _page5],
    ["src/pages/blog/index.astro", _page6],
    ["src/pages/danke.astro", _page7],
    ["src/pages/datenschutz.astro", _page8],
    ["src/pages/impressum.astro", _page9],
    ["src/pages/kampagne/shopify.astro", _page10],
    ["src/pages/karriere/bewerben.astro", _page11],
    ["src/pages/karriere/[slug].astro", _page12],
    ["src/pages/karriere/index.astro", _page13],
    ["src/pages/kontakt.astro", _page14],
    ["src/pages/leistungen/individuelle-entwicklung.astro", _page15],
    ["src/pages/leistungen/shopify-migration.astro", _page16],
    ["src/pages/leistungen/shopify-shop-erstellen.astro", _page17],
    ["src/pages/leistungen/index.astro", _page18],
    ["src/pages/projekt-starten.astro", _page19],
    ["src/pages/referenzen/[slug].astro", _page20],
    ["src/pages/referenzen/index.astro", _page21],
    ["src/pages/ueber-uns.astro", _page22],
    ["src/pages/index.astro", _page23]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "caedcd75-02cf-408f-8066-983e3efada72",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
