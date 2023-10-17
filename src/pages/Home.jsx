import React, { useContext } from 'react'
import { FaCartPlus } from "react-icons/fa"
import CartContext from '../utils/cartContext'
import { Link } from 'react-router-dom'

const Home = () => {
  document.title = 'Home - Advanced React Cart App'

  const { cart, addToCart, updateCart } = useContext(CartContext);


  const categories = [
    {
      'id': 1,
      'name': 'Gaming Laptops'
    },
    {
      'id': 2,
      'name': 'Watches'
    }
  ]
  const products = [
    {
      'id': 1,
      'name': 'Acer Aspire 5 Gaming Laptop',
      'price': 50001,
      'image': 'https://programmingwithharry.com/static/img/slider1.jpg',
      'categoryID': 1
    },
    {
      'id': 2,
      'name': 'ASUS TUF Gaming F15',
      'price': 53701,
      'image': 'https://programmingwithharry.com/static/img/slider1.jpg',
      'categoryID': 1
    },
    {
      'id': 3,
      'name': 'Fossil Analog Blue Dial Men\'s Watch - FS5237',
      'price': 7497,
      'image': 'https://programmingwithharry.com/static/img/slider1.jpg',
      'categoryID': 2
    },
    {
      'id': 4,
      'name': 'Acer Aspire 7 Gaming Laptop',
      'price': 10934,
      'image': 'https://programmingwithharry.com/static/img/slider1.jpg',
      'categoryID': 1
    },
    {
      'id': 5,
      'name': 'Titan Analog Champagne Dial Stainless Steel Strap Men',
      'price': 2394,
      'image': 'https://programmingwithharry.com/static/img/slider1.jpg',
      'categoryID': 2
    }
  ]

  const countProducts = (catID) => {
    const prodsCount = products.filter(e => {
      return e.categoryID === catID
    }).length
    return prodsCount
  }

  const filterProducts = (catID) => {
    const prods = products.filter(e => {
      return e.categoryID === catID
    })
    return prods;
  }

  const handleAddToCart = (e) => {
    const { prodname } = e.target.dataset;
    addToCart(prodname)
    document.getElementById('cartCount').innerText = Object.keys(cart).length;
    e.target.setAttribute('disabled', true);
    e.target.classList.add('disabled:bg-gray-400');
    e.target.innerText = 'Item added to cart';
  }

  return (
    <div className='container w-4/5 mx-auto items-center my-8'>
      <h2 className='text-3xl text-blue-500 overline font-bold'>Buy Laptops</h2>

      <div className='my-2'>
        {categories.map((cat, catID) => {
          return (
            <div className='' key={catID}>
              <h2 className='text-xl text-blue-500 font-bold'>{cat.name} ({countProducts(cat.id)})</h2>

              <div className='lg:flex lg:flex-wrap md:block'>
                {filterProducts(cat.id).map((prod, prodID) => {
                  return (
                    <div className='border shadow-sm rounded lg:w-1/4 w-full mr-3 my-2' key={prodID}>
                      <img src={prod.image} alt="" />

                      <div className="p-3">
                        <h2 className='text-xl text-center text-blue-500 font-bold'>{prod.name}</h2>

                        <div className="my-3">
                          <p className='font-semibold'>Price: ₹ {prod.price}</p>
                        </div>
                      </div>

                      <div className='mb-0 bg-gray-100 p-4'>
                        {cart[prod.name] === undefined && <button data-prodname={prod.name} className='inline-flex items-center bg-emerald-500 border-0 px-2 py-1 focus:outline-none hover:bg-emerald-600 rounded text-base mt-4 md:mt-0 text-white font-semibold relative' onClick={handleAddToCart}>
                          <FaCartPlus /> Add To Cart
                        </button>}
                        {cart[prod.name] !== undefined && <>
                          <button className='inline-flex items-center bg-emerald-500 border-0 px-2 py-1 focus:outline-none hover:bg-emerald-600 rounded text-base mt-4 md:mt-0 text-white font-semibold relative disabled:bg-gray-400' disabled={true}>
                            Item added to cart
                          </button>
                          <Link to={"/mycart"} className='inline-flex items-center bg-emerald-500 border-0 px-2 py-1 focus:outline-none hover:bg-emerald-600 rounded text-base mt-4 md:mt-0 text-white font-semibold relative mx-2'>Go to Cart</Link>
                        </>}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home