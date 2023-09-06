import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadCartFromLocalStorage } from '../slices/cartSlice'; // Replace with the actual path to your utility functions
import CartItems from '../Components/CartItems';
import CartSummary from '../Components/CartSummary';
import EmptyCart from '../Components/EmptyCart';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  
  useEffect(() => {
    const cartData = loadCartFromLocalStorage();
   
    dispatch({ type: 'cart/loadCart', payload: cartData }); 
  }, [dispatch]);

  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className='flex flex-wrap text-center py-24 lg:pl-2 md:pl-2'>
          <CartItems cart={cart} />
          <CartSummary cart={cart} />
        </div>
      )}
    </>
  );
};

export default Cart;
