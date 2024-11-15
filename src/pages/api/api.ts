import {
    collection,
    getFirestore,
    connectFirestoreEmulator,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore'
import type { Recipe } from '../../utils/types'
import { app } from '../../firebase/client'

const db = getFirestore(app)
// Connect to Firestore Emulator
if (import.meta.env.PUBLIC_EMULATOR === '1')
    connectFirestoreEmulator(db, 'localhost', 8080)

// Fetch ALL the products from Firestore
// The function also takes the query as an argument to filter the products.
// The query can be empty. In this case, return all the products.
// If the query is not empty, filter the results based on the query.
//! Order the products by ID in ascending order
export const fetchProducts = async (
    queryStr = '',
    pageSize = 10
): Promise<{ recipes: Recipe[]; totalPages: number }> => {
    const recipesRef = collection(db, 'recipes')
    const recipes: Recipe[] = []
    let totalPages = 0
    const querySnapshot = await getDocs(recipesRef)

    querySnapshot.forEach((doc) => {
        // case-sensitive check
        const dataTemp = (doc.data().name).toLowerCase()
        const queryTemp = queryStr.toLowerCase()

        // console.log(queryTemp, ' => ', dataTemp)

        if (dataTemp.includes(queryTemp) || queryStr == '') {
            const p: Recipe = {
                id: doc.data().id,
                name: doc.data().name,
                game: doc.data().game,
                description: doc.data().description,
                ingredients: doc.data().ingredients,
                steps: doc.data().steps,
                image_url: doc.data().image_url,
            }

            recipes.push(p)
        }
    })

    recipes.sort((a, b) => a.id - b.id)
    totalPages = Math.ceil(recipes.length / pageSize)

    return { recipes, totalPages }
}

// Add a product to Firestore
// The new product should have an ID that is one greater than the current maximum ID in the db
export const addRecipe = async (recipe: Omit<Recipe, 'id'>) => {
    let newID = 0

    const query = await getDocs(collection(db, 'recipes'))
    newID = query.size + 1

    const docRef = await addDoc(collection(db, 'recipes'), {
        id: newID,
        name: recipe.name,
        game: recipe.game,
        description: recipe.description,
        ingredients: recipe.ingredients,
        steps: recipe.steps,
        image_url: recipe.image_url,
    })

    console.log(docRef)

    return { id: newID, ...recipe }
}

// Delete a product from Firestore
export const deleteRecipe = async (recipeId: number) => {
    const data = await getDocs(collection(db, 'recipes'))
    let docID = ''

    data.forEach((document) => {
        if (document.data().id == recipeId) {
            console.log(document)
            docID = String(document.id)
        }
    })

    // const document = doc(db, 'products', String(productId))
    await deleteDoc(doc(db, 'recipes', docID))
    return { id: 0 }
}
