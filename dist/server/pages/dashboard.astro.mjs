import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro } from '../chunks/astro/server_6cJFHL6T.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_BrqVDxJJ.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$Layout } from '../chunks/Layout_BWuebLN9.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const auth = getAuth(app);
  const sessionCookie = Astro2.cookies.get("session")?.value;
  if (sessionCookie) {
    const decodedCookie = await auth.verifySessionCookie(sessionCookie);
    const user = await auth.getUser(decodedCookie.uid);
    if (!user) return Astro2.redirect("/signin");
  } else {
    return Astro2.redirect("/signin");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "dashboard" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/src/components/App", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Dashboard,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
