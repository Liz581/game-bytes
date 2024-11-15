import type React from 'react'
import type { Recipe } from '../utils/types'

interface ProductCardProps {
    recipe: Recipe,
    onClick: () => void
}

const ProductCard: React.FC<ProductCardProps> = ({ recipe, onClick }) => {
    return (
        <div key={recipe.id} className="product-card" role="article" onClick={onClick}>
            <img
                src={recipe.image_url || '/placeholder.png'}
                alt={recipe.name}
                onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = '/placeholder.png'
                }}
            />
            <h3>{recipe.name}</h3>
            <p>ID: {recipe.id}</p>
        </div>
    )
}

export default ProductCard
