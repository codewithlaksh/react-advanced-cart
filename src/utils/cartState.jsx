import React, { useState, useEffect } from 'react'
import CartContext from './cartContext'

const CartState = (props) => {
  const [cart, setCart] = useState({});
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    fetchCart();
  }, [])


  const fetchCart = () => {
    const u = localStorage.getItem('icart') ? localStorage.getItem('icart') : "{}";
    const parsed = JSON.parse(u);
    setCart(parsed)
    setCartCount(Object.keys(parsed).length)
  }

  const addToCart = (item) => {
    if (cart[item] === undefined) {
      cart[item] = 1
    } else {
      cart[item] += 1
    }
    localStorage.setItem('icart', JSON.stringify(cart))
  }

  const updateCart = (action, item) => {
    if (action === 'add') {
      cart[item] += 1
    }
    if (action === 'subtract') {
      if (cart[item] !== 1) {
        cart[item] -= 1
      }
    }
    localStorage.setItem('icart', JSON.stringify(cart));
    fetchCart();
  }

  const filterCart = (value) => {
    if (value === "") {
      const u = localStorage.getItem('icart') ? localStorage.getItem('icart') : "{}";
      const parsed = JSON.parse(u);
      setCart(parsed)
    } else {
      const res = Object.keys(cart).filter(e => e.toLowerCase().includes(value.toLowerCase())).reduce((res, e) => Object.assign(res, { [e]: cart[e] }), {})
      setCart(res);
    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateCart, filterCart, cartCount }}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState