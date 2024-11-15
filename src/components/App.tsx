import React, { useState, useEffect } from 'react'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import ProductDetails from './ProductDetails'
import Search from './Search'
import StatusBanner from './StatusBanner'
import { fetchProducts } from '../pages/api/api'
import '../styles/Icon.css'
import '../styles/App.css'
import type { Recipe } from '../utils/types'
import { LuHome } from "react-icons/lu";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FcFullTrash } from "react-icons/fc";
import { PiSignOutBold } from "react-icons/pi";
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { useRef } from "react";

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [status, setStatus] = useState('')
    const [query, setQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [showForm, setShowForm] = useState<'none' | 'add' | 'delete'>('none')
    const [showRecipe, setShowRecipe] = useState<'none' | 'show'>('none')
    const [pickedRecipe, setPickedRecipe] = useState<Recipe | null>(null)

    const loadProducts = async (query = '') => {
        try {
            const response = await fetchProducts(query)
            setRecipes(response.recipes)
            setTotalPages(response.totalPages)
        } catch (error) {
            console.error('Error fetching recipes:', error)
            setStatus('Failed to load recipes')
        }
    }

    const handleCardClick = (recipe: Recipe) => {
        setPickedRecipe(recipe)
        setShowRecipe('show')
    }
    useEffect(() => {
        // Load every product on initial render
        loadProducts()
    }, [])

    useEffect(() => {
        loadProducts(query)
    }, [query])

    // const navRef = useRef();

	// const showNavbar = () => {
    //     // Check if navRef.current exists before accessing it
    //     if (navRef.current) {
    //       navRef.current.classList.toggle("responsive_nav");
    //     }
    //   };

    return (
        <div>
            <header>
            <img
                src="/game_byte_temp_logo.png"
                className="icon"
            />
			<h1>Game Bytes</h1>
                <div className="header-divider">
                    <a href="/dashboard" className="header-link">
                        <LuHome
                            // alt="Delete Product"
                            className="icon" // You can style this icon just like the <img> element
                        />
                    </a>
                    <span className="tooltip">Home</span>
                </div>
                <div className="header-divider">
                    <a
                        className="header-link"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            setShowForm(showForm === 'add' ? 'none' : 'add')
                        }}
                    >
                    <IoIosAddCircleOutline
                        className="icon" // You can style this icon just like the <img> element
                    />
                    </a>
                    <span className="tooltip">Add Recipe</span>
                </div>
                <div className="header-divider">
                    <a
                        className="header-link"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            setShowForm(
                                showForm === 'delete' ? 'none' : 'delete'
                            )
                        }}
                    >
                        <FcFullTrash
                            // alt="Delete Product"
                            className="icon" // You can style this icon just like the <img> element
                        />
                    </a>
                    <span className="tooltip">Delete Recipe</span>
                </div>
                <form action="/api/auth/signout" className="header-divider">
                    <button id="logout" type="submit" className="header-link">
                        <PiSignOutBold
                            // alt="Delete Product"
                            className="icon" // You can style this icon just like the <img> element
                        />
                    </button>
                    <span className="tooltip">Sign Out</span>
                </form>
            </header>
            {status && (
                <StatusBanner message={status} onClose={() => setStatus('')} />
            )}
            {showForm === 'add' && (
                <ProductForm
                    mode="add"
                    onProductAdded={() => {
                        setStatus('Recipe added successfully')
                        setShowForm('none')
                        loadProducts()
                        setCurrentPage(1)
                    }}
                />
            )}
            {showForm === 'delete' && (
                <ProductForm
                    mode="delete"
                    onProductDeleted={() => {
                        setStatus('Recipe deleted successfully')
                        setShowForm('none')
                        loadProducts()
                        setCurrentPage(1)
                    }}
                />
            )}
            {
                showRecipe === 'show' && pickedRecipe && (
                    <div>
                        <ProductDetails recipe={pickedRecipe} onClose={() => setShowRecipe('none')} />
                    </div>
                )
            }
            {showForm === 'none' && (
                <>
                    {/* {" "} */}
                    <Search
                        query={query}
                        setQuery={setQuery}
                        setCurrentPage={setCurrentPage}
                    />
                    <ProductList
                        recipes={recipes}
                        currentPage={currentPage}
                        totalPages={totalPages}
                        setCurrentPage={setCurrentPage}
                        onCardClick={handleCardClick}
                    />
                </>
            )}
        </div>
    )
}

export default App
