

import { createSlice } from '@reduxjs/toolkit'
import {toast} from "react-hot-toast"

const localStorageKey = 'cartData';

export const saveCartToLocalStorage = (cartData) => {
  localStorage.setItem(localStorageKey, JSON.stringify(cartData));
};

export const loadCartFromLocalStorage = () => {
  const cartData = localStorage.getItem(localStorageKey);
  return cartData ? JSON.parse(cartData) : [];
};

const initialState = {
  cart: loadCartFromLocalStorage(),
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state,action) => {
      const existingItem = state.cart.find((item)=>item.id===action.payload.id)
      if(existingItem){
        state.cart=state.cart.map((item)=>item.id===action.payload.id ? {...item,qty:item.qty+1}: item)
        toast.success("Product added")
      }else{
        state.cart.push({...action.payload,qty:1})
        toast.success("Product added")
      }
      saveCartToLocalStorage(state.cart);
    },
    removeFromCart:(state,action) =>{
      state.cart= state.cart.filter(item=>item.id!==action.payload)
      toast.success("Product removed")
      saveCartToLocalStorage(state.cart);
    },
    increaseQuantity:(state,action) =>{
      state.cart = state.cart.map((item)=>item.id===action.payload ? {...item,qty:item.qty+1} : item)
      saveCartToLocalStorage(state.cart);
    },
    decreaseQuantity:(state,action) =>{
       
      state.cart = state.cart.map((item)=>{
        if(item.id===action.payload){
          if(item.qty>1){
          item = {...item,qty:item.qty-1}
          }
        }
        return item
      })
      saveCartToLocalStorage(state.cart);
    }
   
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,increaseQuantity,decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer