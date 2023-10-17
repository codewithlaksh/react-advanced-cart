import React, { useContext } from 'react'
import CartContext from '../utils/cartContext'

const Cart = () => {
  document.title = 'MyCart  - Advanced React Cart App'

  const { cart, updateCart, filterCart, cartCount } = useContext(CartContext);

  const handleFilterCart = (e) => {
    filterCart(e.target.value);
  }

  const handleUpdateCart = (e) => {
    const { action, prodname } = e.target.dataset;
    // console.log(e.target)
    updateCart(action, prodname);
  }

  return (
    <div className='container w-3/4 mx-auto my-8'>
      <h2 className='text-3xl text-blue-500 overline font-bold'>Your Cart Items ({cartCount})</h2>

      <div className='border shadow p-4 border-blue-500 rounded-md my-5'>
        <label htmlFor="searchInp">
          <h2 className='text-xl text-blue-500 font-semibold'>Search Items In Your Cart</h2>
        </label>
        <input type="text" className='w-full p-1 border-2 focus:shadow focus:outline-none rounded-md border-blue-500 mt-4' name='searchInp' id='searchInp' onChange={handleFilterCart} />
      </div>

      {Object.entries(cart).map((item, index) => {
        return <div className='border-2 shadow-sm p-3 my-3 rounded-md border-blue-500 flex items-center justify-between' key={index}>
          <p className='font-semibold'>{item[0]}</p>
          <p className='font-semibold flex items-center justify-between'>
            <button data-action="subtract" data-prodname={item[0]} className='text-xl text-blue-500 font-bold mr-2 cursor-pointer' onClick={handleUpdateCart}>
              -
            </button>
            <span>{item[1]}</span>
            <button data-action="add" data-prodname={item[0]} className='text-xl text-blue-500 font-bold ml-2 cursor-pointer' onClick={handleUpdateCart}>
              +
            </button>
          </p>
        </div>
      })}
    </div>
  )
}

export default Cart