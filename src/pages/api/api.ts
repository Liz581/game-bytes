import {
    collection,
    getFirestore,
    connectFirestoreEmulator,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore'
import type { Product, Recipe } from '../../utils/types'
import { app } from '../../firebase/client'

const db = getFirestore(app)
// Connect to Firestore Emulator
if (import.meta.env.PUBLIC_EMULATOR === '1')
    connectFirestoreEmulator(db, 'localhost', 8080)

// TODO Finalize this function to fetch ALL the products from Firestore
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
        // console.log(doc.data().id, ' => ', doc.data().name)
        if (doc.data().name.includes(queryStr) || queryStr == '') {
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

// TODO Finalize this function to add a product to Firestore
// The new product should have an ID that is one greater than the current maximum ID in the db
export const addProduct = async (product: Omit<Product, 'id'>) => {
    let newID = 0

    const query = await getDocs(collection(db, 'products'))
    newID = query.size + 1

    const docRef = await addDoc(collection(db, 'products'), {
        id: newID,
        name: product.name,
        image_url: product.image_url,
        deleted: product.deleted,
    })

    console.log(docRef)

    return { id: newID, ...product }
}

// TODO Finalize this function to delete a product from Firestore
export const deleteProduct = async (productId: number) => {
    const data = await getDocs(collection(db, 'products'))
    let docID = ''

    data.forEach((document) => {
        if (document.data().id == productId) {
            console.log(document)
            docID = String(document.id)
        }
    })

    // const document = doc(db, 'products', String(productId))
    await deleteDoc(doc(db, 'products', docID))
    return { id: 0 }
}
