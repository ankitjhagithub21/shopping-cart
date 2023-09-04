import React from 'react'

const EmptyCart = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
    <img
      className="lg:w-2/6 md:w-3/6 w-5/6  object-contain object-center rounded"
      alt="hero"
      src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-7359557-6024626.png"
    />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font text-2xl mb-4 font-medium text-gray-900">
      Your Cart is empty
      </h1>
      <p className="mb-8 leading-relaxed">
        Looks like you have not added anything to your cart. Go ahead & explore top categories.
      </p>
      
    </div>
  </div>
</section>

  )
}

export default EmptyCart
