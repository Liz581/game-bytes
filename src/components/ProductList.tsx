import React from 'react'
import type { Recipe } from '../utils/types'
import ProductCard from './ProductCard'
import '../styles/ProductList.css'

interface ProductListProps {
    recipes: Recipe[]
    currentPage: number
    totalPages: number
    setCurrentPage: (page: number) => void,
    onCardClick: (recipe: Recipe) => void
}
const ProductList: React.FC<ProductListProps> = ({
    recipes,
    currentPage,
    totalPages,
    setCurrentPage,
    onCardClick
}) => {
    const renderPaginationLinks = () => {
        const links = []
        for (let i = 1; i <= totalPages; i++) {
            links.push(
                <a
                    key={i}
                    href="#"
                    onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(i)
                    }}
                    className={currentPage === i ? 'active' : ''}
                >
                    {i}
                </a>
            )
        }
        return links
    }

    // TODO Render the products in the grid
    // This component is given the full list of products and the current page
    // Return a list of ProductCard components for the products on the current page
    const renderProducts = () => {
        let lastIndex = currentPage * 10
        const firstIndex = lastIndex - 10

        if (lastIndex > recipes.length) lastIndex = recipes.length
        const slicedProducts = recipes.slice(firstIndex, lastIndex)
        return slicedProducts.map((p, i) => <ProductCard key={i} recipe={p} onClick={() => onCardClick(p)} />)
    }

    return (
        <div className="product-list">
            <h2>Recipes</h2>
            {recipes.length === 0 ? (
                <p>No products found.</p>
            ) : (
                <div className="product-grid">{renderProducts()}</div>
            )}
            <div className="pagination">{renderPaginationLinks()}</div>
        </div>
    )
}

export default ProductList
