import React from 'react'


const CartSummary = ({cart}) => {
    const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);
    return (
        <div className="px-2 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-2 py-6 rounded-lg">
                <h2 className="title-font font-medium text-2xl text-gray-900 mb-4">Cart Summary</h2>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-lg">Total Items:</span>
                    <span className="text-lg">{cart.length}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-lg">Total Price:</span>
                    <span className="text-lg">$ {totalPrice.toFixed(2)}</span>
                </div>
                <button className="mt-6 py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                    ORDER NOW
                </button>

            </div>
        </div>
    )
}

export default CartSummary
