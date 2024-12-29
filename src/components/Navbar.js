/**************************************************************

Navbar

***************************************************************/
import React from 'react'
import { useSelector } from "react-redux";

import { CartIcon } from '../HeroIcons';

const Navbar = () => {
  // 第1引数はstore
  // const cart = useSelector(store =>  store.cart)
  // console.log(cart)
  const { amount } = useSelector(store => store.cart);
  // console.log(amount)


  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Shopping</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{ amount }</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar