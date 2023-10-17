import React, { useContext } from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { BsDot } from "react-icons/bs"
import logo from "../assets/react.svg"
import { Link } from "react-router-dom"
import CartContext from '../utils/cartContext'

const Header = () => {
    const { cartCount } = useContext(CartContext);

    return (
        <header className="text-gray-600 body-font shadow">
            <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src={logo} className='w-8' alt="" />
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="/" className="mr-5 hover:text-gray-900">Home</Link>
                    <Link to="#" className="mr-5 hover:text-gray-900">About Us</Link>
                    <Link to="#" className="mr-5 hover:text-gray-900">Contact Us</Link>
                </nav>
                <Link to={"/mycart"} className="inline-flex items-center bg-emerald-500 border-0 py-2 px-3 focus:outline-none hover:bg-emerald-600 rounded text-base mt-4 md:mt-0 text-white font-semibold relative">
                    <FaShoppingCart />&nbsp;Cart
                    <span id='cartCount' className='absolute bg-red-500 text-white font-semibold w-4 h-4 -top-1 -right-1 rounded-full text-center text-xs'>
                        {cartCount}
                    </span>
                </Link>
            </div>
        </header>
    )
}

export default Header