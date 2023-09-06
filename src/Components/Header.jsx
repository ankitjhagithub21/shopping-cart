import React from 'react'
import logo from "../assets/logo.png"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
const Header = () => {
  const cart = useSelector((state)=>state.cart.cart)
  return (
    <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" to="/">
      <img src={logo} alt="logo" width={30} />
      <span className="ml-3 text-xl">Shopping Cart</span>
    </Link>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900" to="/about">About</Link>
      <Link className="mr-5 hover:text-gray-900" to="/products">Products</Link>

    </nav>
    <Link className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" to="/cart">
      Cart <span className='bg-indigo-500 px-2 text-white rounded-full ml-2'>{cart.length}</span>
     
    </Link>
  </div>
</header>

  )
}

export default Header
