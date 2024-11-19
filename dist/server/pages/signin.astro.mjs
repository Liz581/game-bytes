import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_6cJFHL6T.mjs';
import 'kleur/colors';
import { a as app } from '../chunks/server_BrqVDxJJ.mjs';
import { getAuth } from 'firebase-admin/auth';
import { $ as $$Layout } from '../chunks/Layout_BWuebLN9.mjs';
/* empty css                                    */
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Signin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
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
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sign in", "data-astro-cid-cj4bt2fj": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="background-screen" data-astro-cid-cj4bt2fj> <div class="title-form" data-astro-cid-cj4bt2fj> <h1 data-astro-cid-cj4bt2fj>Welcome to Game Bytes!</h1> </div> <div data-astro-cid-cj4bt2fj> <form class="login-form" data-astro-cid-cj4bt2fj> <header data-astro-cid-cj4bt2fj>Login</header> <label for="emailId" data-astro-cid-cj4bt2fj>Email</label> <input type="text" id="emailId" name="email" required data-astro-cid-cj4bt2fj> <label for="password" data-astro-cid-cj4bt2fj>Password</label> <input type="password" id="password" name="password" required data-astro-cid-cj4bt2fj> <button id="loginButton" type="submit" data-astro-cid-cj4bt2fj> Login </button> <div data-astro-cid-cj4bt2fj> <p id="msg-for-failure" data-astro-cid-cj4bt2fj></p> </div> <div class="container mt-3 new-user-container" data-astro-cid-cj4bt2fj> <a href="/register" data-astro-cid-cj4bt2fj>Create Account</a> </div> </form> </div> </div> ` })}  `;
}, "C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/src/pages/signin.astro", void 0);

const $$file = "C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Signin,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
