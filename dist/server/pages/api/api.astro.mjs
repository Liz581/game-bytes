import { getFirestore, connectFirestoreEmulator, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
export { renderers } from '../../renderers.mjs';

const firebaseConfig = {
  apiKey: "AIzaSyAI4rtqaXHfUK34631sZSp6Tz5L9fxi3fc",
  authDomain: "game-bytes.firebaseapp.com",
  projectId: "game-bytes",
  storageBucket: "game-bytes.firebasestorage.app",
  messagingSenderId: "105800413262",
  appId: "1:105800413262:web:d973a60de8303bc079531f"
};
const app = initializeApp(firebaseConfig);
getAuth(app);

const db = getFirestore(app);
connectFirestoreEmulator(db, "localhost", 8080);
//! Order the products by ID in ascending order
const fetchProducts = async (queryStr = "", pageSize = 10) => {
  const recipesRef = collection(db, "recipes");
  const recipes = [];
  let totalPages = 0;
  const querySnapshot = await getDocs(recipesRef);
  querySnapshot.forEach((doc2) => {
    const dataTemp = doc2.data().name.toLowerCase();
    const queryTemp = queryStr.toLowerCase();
    if (dataTemp.includes(queryTemp) || queryStr == "") {
      const p = {
        id: doc2.data().id,
        name: doc2.data().name,
        game: doc2.data().game,
        description: doc2.data().description,
        ingredients: doc2.data().ingredients,
        steps: doc2.data().steps,
        image_url: doc2.data().image_url
      };
      recipes.push(p);
    }
  });
  recipes.sort((a, b) => a.id - b.id);
  totalPages = Math.ceil(recipes.length / pageSize);
  return { recipes, totalPages };
};
const addRecipe = async (recipe) => {
  let newID = 0;
  const query = await getDocs(collection(db, "recipes"));
  newID = query.size + 1;
  const docRef = await addDoc(collection(db, "recipes"), {
    id: newID,
    name: recipe.name,
    game: recipe.game,
    description: recipe.description,
    ingredients: recipe.ingredients,
    steps: recipe.steps,
    image_url: recipe.image_url
  });
  console.log(docRef);
  return { id: newID, ...recipe };
};
const deleteRecipe = async (recipeId) => {
  const data = await getDocs(collection(db, "recipes"));
  let docID = "";
  data.forEach((document) => {
    if (document.data().id == recipeId) {
      console.log(document);
      docID = String(document.id);
    }
  });
  await deleteDoc(doc(db, "recipes", docID));
  return { id: 0 };
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  addRecipe,
  deleteRecipe,
  fetchProducts
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
