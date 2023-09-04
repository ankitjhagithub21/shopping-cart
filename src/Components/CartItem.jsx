import React from 'react'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../slices/cartSlice'
const CartItem = ({item}) => {
  const dispatch = useDispatch()
  return (
    <div className="p-4 md:w-1/3  w-full relative">
    <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
      <button
        className="absolute left-8 top-5 text-xl font-medium"
       
     onClick={()=>dispatch(removeFromCart(item.id))} >
        X
      </button>
      <img src={item.image} alt={item.title} className="mx-auto h-32" />
      <h2 className="text-xl my-2">{item.title.slice(0,20).toUpperCase()}</h2>
      <div className="flex justify-center align-center  gap-3 my-3">
        <button className="text-3xl text-red-500" onClick={()=>dispatch(decreaseQuantity(item.id))}>
          -
        </button>
        <span className="border p-2 text-xl">{item.qty}</span>
        <button className="text-3xl text-green-500 text-bold" onClick={()=>dispatch(increaseQuantity(item.id))}>
          +
        </button>
      </div>
      <b className="text-xl">${(item.price*item.qty).toFixed(2)}</b>
    </div>
  </div>
  )
}

export default CartItem
