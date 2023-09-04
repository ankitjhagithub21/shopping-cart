import React from 'react'
import {useNavigate} from "react-router-dom"
const Product = ({product}) => {
    const navigate = useNavigate();

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full hover:bg-slate-100 hover:cursor-pointer" onClick={()=>navigate(`/products/${product.id}`)}>
        <a className="block relative h-48 rounded overflow-hidden ">
          <img
            alt="ecommerce"
            className="object-contain w-full h-full block"
            src={product.image}
          />
        </a>
        <div className="mt-4 text-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product.category}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {product.title.slice(0,25).toUpperCase()}
          </h2>
          <p className="mt-1">${product.price}</p>
        </div>
      </div>
  )
}

export default Product
