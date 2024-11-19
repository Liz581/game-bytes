import { getAuth } from 'firebase-admin/auth';
import { a as app } from '../../../chunks/server_BrqVDxJJ.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, redirect }) => {
  const auth = getAuth(app);
  console.log(auth);
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");
    if (name == "" || email == "" || password == "") {
      return new Response(`Something went wrong`, {
        status: 400
      });
    }
    const user = {
      email,
      password,
      name
    };
    auth.createUser(user).then((userRecord) => {
      console.log("Successfully created new user:", userRecord.uid);
    }).catch((error) => {
      console.log("Error creating new user:", error);
    });
    return redirect("/signin");
  } catch (error) {
    console.log(error);
    return new Response(`Something went wrong`, {
      status: 400
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
