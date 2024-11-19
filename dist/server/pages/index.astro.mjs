import { c as createComponent, r as renderTemplate, b as createAstro } from '../chunks/astro/server_6cJFHL6T.mjs';
import 'kleur/colors';
import 'clsx';
import { getAuth } from 'firebase-admin/auth';
import { a as app } from '../chunks/server_BrqVDxJJ.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const auth = getAuth(app);
  const sessionCookie = Astro2.cookies.get("session")?.value;
  if (sessionCookie) {
    try {
      const decodedCookie = await auth.verifySessionCookie(sessionCookie);
      if (decodedCookie) return Astro2.redirect("/dashboard");
    } catch (error) {
      console.log("Session verification failed:", error);
      Astro2.cookies.delete("session", { path: "/" });
    }
  } else {
    return Astro2.redirect("/signin");
  }
  return renderTemplate``;
}, "C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/src/pages/index.astro", void 0);

const $$file = "C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
