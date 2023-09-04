import { createSlice } from '@reduxjs/toolkit'
import {toast} from "react-hot-toast"
const initialState = {
  cart: [],
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
      
    },
    removeFromCart:(state,action) =>{
      state.cart= state.cart.filter(item=>item.id!==action.payload)
      toast.success("Product removed")
    },
    increaseQuantity:(state,action) =>{
      state.cart = state.cart.map((item)=>item.id===action.payload ? {...item,qty:item.qty+1} : item)
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
    }
   
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,removeFromCart,increaseQuantity,decreaseQuantity } = cartSlice.actions

export default cartSlice.reducer