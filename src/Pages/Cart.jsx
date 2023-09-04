import React from 'react'

import { useSelector} from 'react-redux'

import CartItems from '../Components/CartItems'
import CartSummary from '../Components/CartSummary'
import EmptyCart from '../Components/EmptyCart'

const Cart = () => {
  const cart = useSelector((state) => state.cart.cart) 
  return (
    <>
    {
      cart.length==0 ? <EmptyCart/> : <div className='flex flex-wrap text-center py-24 lg:pl-2 md:pl-2'>
      <CartItems cart={cart}/>
      <CartSummary cart={cart}/>
    </div>
    }
    </>
  )
}

export default Cart
