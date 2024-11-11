import { config } from 'dotenv'
import fs from 'fs/promises'
import {
    collection,
    doc,
    getDocs,
    deleteDoc,
    writeBatch,
} from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import firebaseConfig from './client-credentials.json' with { type: 'json' }

config()

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Connect to Firestore Emulator
if (process.env.PUBLIC_EMULATOR === '1')
    connectFirestoreEmulator(db, 'localhost', 8080)

// Function to delete all documents in the products collection
async function clearRecipesCollection() {
    try {
        const recipesCollection = collection(db, 'recipes')
        const recipesSnapshot = await getDocs(recipesCollection)
        const deletePromises = recipesSnapshot.docs.map((doc) =>
            deleteDoc(doc.ref)
        )
        await Promise.all(deletePromises)
        console.log('Recipes collection cleared')
    } catch (error) {
        console.error('Error clearing recipes collection:', error)
    }
}

// Add products to Firestore
async function addRecipes() {
    try {
        // Read and parse the JSON file
        const data = await fs.readFile('./recipes.json', 'utf8')
        const recipes = JSON.parse(data).recipes

        // Clear existing products
        await clearRecipesCollection()

        // Create a batch
        const batch = writeBatch(db)

        for (const id in recipes) {
            const recipe = recipes[id]
            const recipeRef = doc(collection(db, 'recipes'))
            batch.set(recipeRef, {
                id: parseInt(id),
                name: recipe.name,
                game: recipe.game,
                description: recipe.description,
                ingredients: recipe.ingredients,
                steps: recipe.steps,
                image_url: recipe.image_url,
                // deleted: product.deleted,
            })
        }

        // Commit the batch
        await batch.commit()
        console.log('All recipes added in batch')
        process.exit(0)
    } catch (error) {
        console.error('Error reading recipes.json:', error)
        process.exit(1)
    }
}

await addRecipes()
