import React, { useState } from 'react'
import { addRecipe, deleteRecipe } from '../pages/api/api'
import '../styles/ProductForm.css'

interface ProductFormProps {
    mode: 'add' | 'delete'
    onProductAdded?: () => void
    onProductDeleted?: () => void
}
const ProductForm: React.FC<ProductFormProps> = ({
    mode,
    onProductAdded,
    onProductDeleted,
}) => {
    const [name, setName] = useState('')
    const [game, setGame] = useState('')
    const [description, setDescription] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [steps, setSteps] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [recipeId, setRecipeId] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            if (mode === 'add') {
                await addRecipe({
                    name,
                    game,
                    description,
                    ingredients,
                    steps,
                    image_url: imageUrl,
                })
                setName('')
                setImageUrl('')
                onProductAdded?.()
            } else {
                await deleteRecipe(Number(recipeId))
                setRecipeId('')
                onProductDeleted?.()
            }
        } catch (error) {
            console.error(
                `Error ${mode === 'add' ? 'adding' : 'deleting'} product:`,
                error
            )
        }
    }

    return (
        <div className="product-form-container">
            <h2 className="product-form-title">
                {mode === 'add' ? 'Add New Product' : 'Delete Product'}
            </h2>
            <form onSubmit={handleSubmit} className="product-form">
                {mode === 'add' ? (
                    <>
                        <div className="form-group">
                            <label htmlFor="name"></label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                placeholder="Enter recipe name..."
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="game"></label>
                            <input
                                type="text"
                                id="game"
                                value={game}
                                placeholder="Enter game reference..."
                                onChange={(e) => setGame(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description"></label>
                            <input
                                type="text"
                                id="description"
                                value={description}
                                placeholder="Enter recipe description..."
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="ingredients"></label>
                            <input
                                type="text"
                                id="ingredients"
                                value={ingredients}
                                placeholder="Enter recipe ingredients..."
                                onChange={(e) => setIngredients(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="steps"></label>
                            <input
                                type="text"
                                id="steps"
                                value={steps}
                                placeholder="Enter recipe steps..."
                                onChange={(e) => setSteps(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="imageUrl"></label>
                            <input
                                type="url"
                                id="imageUrl"
                                value={imageUrl}
                                placeholder="Enter image URL of in game treat..."
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                        </div>
                    </>
                ) : (
                    <div className="form-group">
                        <label htmlFor="productId"></label>
                        <input
                            type="text"
                            id="productId"
                            value={recipeId}
                            placeholder="Enter recipe ID..."
                            onChange={(e) => setRecipeId(e.target.value)}
                            required
                        />
                    </div>
                )}
                <button
                    type="submit"
                    id="submitButton"
                    className={
                        mode === 'add' ? 'submit-button' : 'delete-button'
                    }
                >
                    {mode === 'add' ? 'Add Product' : 'Delete Product'}
                </button>
            </form>
        </div>
    )
}

export default ProductForm
