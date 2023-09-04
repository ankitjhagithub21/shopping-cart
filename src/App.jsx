import React from 'react'
import "./App.css"
import Header from './Components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import NotFound from './Pages/NotFound'
import SingleProduct from './Pages/SingleProduct'
import Footer from './Components/Footer'
import About from './Pages/About'
const App = () => {
  return (
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/products' element={<Products/>}/>
    <Route path='/products/:id' element={<SingleProduct/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/*' element={<NotFound/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
  )
}

export default App
