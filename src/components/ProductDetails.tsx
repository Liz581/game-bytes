import React from 'react'
import type { Recipe } from '../utils/types'
import '../styles/ProductDetails.css'

// interface ProductFormProps {
//     mode: 'add' | 'delete'
//     onProductAdded?: () => void
//     onProductDeleted?: () => void
// }

interface ProductDetailProps {
    recipe: Recipe
}

const ProductDetails: React.FC<ProductDetailProps> = ({ recipe }) => {
    // const [name, setName] = useState('')
    // const [game, setGame] = useState('')
    // const [description, setDescription] = useState('')
    // const [ingredients, setIngredients] = useState('')
    // const [steps, setSteps] = useState('')
    // const [imageUrl, setImageUrl] = useState('')
    // const [recipeId, setRecipeId] = useState('')

    return (
        <div className="product-form-container">
            <button
                    type="submit"
                    id="submitButton"
                    className={"buttonReturn"}
                >
                    Arrow
            </button>
            <img
                src={recipe.image_url || '/placeholder.png'}
                alt={recipe.name}
                onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/placeholder.png'
                }}
            />
            <h2 className="product-form-title">
                {recipe.name}
            </h2>
            <h3>{recipe.game}</h3>
            <div>
                <h4>{recipe.description}</h4>
                <p>{recipe.ingredients}</p>
                <p>{recipe.steps}</p>
            </div>
        </div>
    )
}

export default ProductDetails
