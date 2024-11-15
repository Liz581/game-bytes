import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CMj1K_im.mjs';
import { manifest } from './manifest_DxP1JCLD.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/api.astro.mjs');
const _page2 = () => import('./pages/api/auth/register.astro.mjs');
const _page3 = () => import('./pages/api/auth/signin.astro.mjs');
const _page4 = () => import('./pages/api/auth/signout.astro.mjs');
const _page5 = () => import('./pages/dashboard.astro.mjs');
const _page6 = () => import('./pages/register.astro.mjs');
const _page7 = () => import('./pages/signin.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/api.ts", _page1],
    ["src/pages/api/auth/register.ts", _page2],
    ["src/pages/api/auth/signin.ts", _page3],
    ["src/pages/api/auth/signout.ts", _page4],
    ["src/pages/dashboard.astro", _page5],
    ["src/pages/register.astro", _page6],
    ["src/pages/signin.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "standalone",
    "client": "file:///C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/dist/client/",
    "server": "file:///C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/dist/server/",
    "host": false,
    "port": 3000,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
