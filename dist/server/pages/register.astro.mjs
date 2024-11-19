import { c as createComponent, r as renderTemplate, d as renderComponent, b as createAstro, m as maybeRenderHead } from '../chunks/astro/server_6cJFHL6T.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_BWuebLN9.mjs';
/* empty css                                    */
import { a as app } from '../chunks/server_BrqVDxJJ.mjs';
import { getAuth } from 'firebase-admin/auth';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Register" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="background-screen"> <div class="create-user"> <form action="/api/auth/register" method="post" class="signup-form"> <header class="form-title">Create a New User</header> <label for="name">Name</label> <input id="name" name="name" class="form-control" placeholder="Enter First Name"> <label for="email">Email</label> <input id="email" name="email" class="form-control" placeholder="Enter Email ID"> <label for="password">Password</label> <input id="password" type="password" name="password" class="form-control" placeholder="Enter Password"> <button id="createUserButton" type="submit" class="btn btn-primary" style="margin-top: 10px">
Submit
</button> <a href="/signin" class="btn btn-primary">Go to Login</a> <div class="hidden-info"> <p id="msg-for-failure-sucess"></p> </div> </form> </div> </div> ` })}`;
}, "C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/src/pages/register.astro", void 0);

const $$file = "C:/Users/ricok/OneDrive/Documents/GitHub/game-bytes/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Register,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
