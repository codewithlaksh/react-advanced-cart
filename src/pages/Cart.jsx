import React, { useContext } from 'react'
import CartContext from '../utils/cartContext'

const Cart = () => {
  document.title = 'MyCart  - Advanced React Cart App'

  const { cart, updateCart, filterCart, cartCount, deleteFromCart, clearCart } = useContext(CartContext);

  const handleFilterCart = (e) => {
    filterCart(e.target.value);
  }

  const handleUpdateCart = (e) => {
    const { action, prodname } = e.target.dataset;
    // console.log(e.target)
    updateCart(action, prodname);
  }

  const handleDeleteFromCart = (e) => {
    const { prodname } = e.target.dataset;
    deleteFromCart(prodname);
    document.getElementById('cartCount').innerText = Object.keys(cart).length;
  }

  const handleClearCart = () => {
    clearCart();
    document.getElementById('cartCount').innerText = '0';
  }

  return (
    <div className='container w-3/4 mx-auto my-8'>
      <h2 className='text-3xl text-blue-500 overline font-bold'>Your Cart Items ({cartCount})</h2>

      {Object.keys(cart).length > 0 && <div className='border shadow p-4 border-blue-500 rounded-md my-5'>
        <label htmlFor="searchInp">
          <h2 className='text-xl text-blue-500 font-semibold'>Search Items In Your Cart</h2>
        </label>
        <input type="text" className='w-full p-1 border-2 focus:shadow focus:outline-none rounded-md border-blue-500 mt-4' name='searchInp' id='searchInp' onChange={handleFilterCart} />
      </div>}

      {Object.keys(cart).length > 0 && Object.entries(cart).map((item, index) => {
        return <div className='border-2 shadow-sm p-3 my-3 rounded-md border-blue-500 flex items-center justify-between' key={index}>
          <p className='font-semibold'>{item[0]}</p>
          <p className='font-semibold flex items-center justify-between'>
            <i data-action="subtract" data-prodname={item[0]} className='fa fa-minus-circle text-blue-500 font-bold mr-2 cursor-pointer' onClick={handleUpdateCart}></i>
            <span>{item[1]}</span>
            <i data-action="add" data-prodname={item[0]} className='fa fa-plus-circle text-blue-500 font-bold ml-2 cursor-pointer' onClick={handleUpdateCart}></i>
            <i data-prodname={item[0]} className='fa fa-trash text-blue-500 font-bold ml-2 cursor-pointer' onClick={handleDeleteFromCart}></i>
          </p>
        </div>
      })}

      {Object.keys(cart).length === 0 && <p className='text-blue-500 my-8 font-bold'>Sorry, no items available in your cart!</p>}

      {Object.keys(cart).length > 0 && <button className="inline-flex items-center bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0 text-white font-semibold relative" onClick={handleClearCart}>
        <i className="fa fa-trash"></i>&nbsp;Clear cart
      </button>}
    </div>
  )
}

export default Cart