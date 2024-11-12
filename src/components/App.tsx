import React, { useState, useEffect } from 'react'
import ProductList from './ProductList'
import ProductForm from './ProductForm'
import Search from './Search'
import StatusBanner from './StatusBanner'
import { fetchProducts } from '../pages/api/api'
import '../styles/Icon.css'
import '../styles/App.css'
import type { Recipe } from '../utils/types'
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { FaBars } from "react-icons/fa";
import { FcFullTrash } from "react-icons/fc";
import { TiHome } from "react-icons/ti";
import { IoIosAddCircle } from "react-icons/io";
import { PiSignOutBold } from "react-icons/pi";
// import { useRef } from "react";

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([])
    const [status, setStatus] = useState('')
    const [query, setQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    const [showForm, setShowForm] = useState<'none' | 'add' | 'delete'>('none')

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
                alt="Delete Product"
                className="icon"
            />
			<h1>Game Bytes</h1>
                <div className="header-divider">
                    <a
                        className="header-link"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()
                            setShowForm(showForm === 'add' ? 'none' : 'add')
                        }}
                    >
                    <IoIosAddCircle
                        // alt="Delete Product"
                        className="icon" // You can style this icon just like the <img> element
                    />
                    </a>
                    <span className="tooltip">Add Recipe</span>
                </div>
                <div className="header-divider">
                    <a href="/dashboard" className="header-link">
                        <TiHome
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
                            setShowForm(
                                showForm === 'delete' ? 'none' : 'delete'
                            )
                        }}
                    >
                        
                        {/* <img
                            src="/delete.svg"
                            alt="Delete Product"
                            className="icon"
                        /> */}
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
                    />
                </>
            )}
        </div>
    )
}

export default App
