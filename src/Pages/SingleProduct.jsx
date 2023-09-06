import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../slices/cartSlice';
import { Toaster } from 'react-hot-toast';
import Loading from "../Components/Loading"
const SingleProduct = () => {
  
  let { id } = useParams();
  const [product,setProduct] = useState({})
  const [isloading,setIsLoading] = useState(true)
  const dispatch = useDispatch()


  useEffect(()=>{
    const fetchProduct = async() =>{
     try{
      const res = await fetch(`https://fakestoreapi.com/products/${id}`)
      const data = await res.json()
      setProduct(data)
      setIsLoading(false)
     }catch(err){
      console.log(err)
     }
      
    }
    fetchProduct()
  },[])

  if (isloading) {
    return <div className="flex flex-wrap container">
      <Loading className="lg:w-1/2 w-full" />
      <Loading className="lg:w-1/2 w-full" />
    </div>
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <Toaster/>
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
      <img
        alt="ecommerce"
        className="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded"
        src={product.image}
       style={{maxHeight:"350px"}}
      />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">
         {product.category}
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
          {product.title}
        </h1>
        
        <p className="leading-relaxed">
        {product.description}
        </p>
        
        <div className="flex mt-5 ">
          <span className="title-font font-medium text-2xl text-gray-900">
            Price: ${product.price}
          </span>
          <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"onClick={() => dispatch(addToCart(product))}>
            ADD TO CART
          </button>
      
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default SingleProduct
