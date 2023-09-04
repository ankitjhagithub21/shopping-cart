import React from 'react'
import CartItem from '../Components/CartItem'
import { Toaster } from 'react-hot-toast'
const CartItems = ({cart}) => {
    
  return (
    <div className="p-4 md:w-3/4 sm:w-1/2 w-full border rounded">
        <Toaster/>
    <div className=' border-gray-200  rounded-lg flex flex-wrap'>
      {
        cart.map((item)=>{
          return  <CartItem key={item.id} item={item}/>
        })
      }
   
    </div>
  </div>
  )
}

export default CartItems
