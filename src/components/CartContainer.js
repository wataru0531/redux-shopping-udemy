import React from 'react'
import { useSelector, useDispatch } from "react-redux";


import { openModal } from  "../features/modal/ModalSlice";

import CartItem from './CartItem';

const CartContainer = () => {
  const { amount, cartItems, total } = useSelector(store => store.cart);
  // console.log(cartItems)

  const dispatch = useDispatch();

  // 全削除ボタン
  const onClickClear = () => {
    // dispatch(clearCart())
    dispatch(openModal())
  }

  return (
    <section className="cart">
      <header>
        <h2>買い物カゴ</h2>
      </header>

      {
        amount < 1 ? ( 
          <h4 className="empty-cart">何も入ってません...</h4> 
        ) : (
          <div>
            <div>
              {
                cartItems.map(cartItem => (
                  <CartItem key={ cartItem.id } { ...cartItem } />
                ))
              }
            </div>
            <footer>
              <hr />
              <div className="cart-total">
                <h4>合計<span>¥{ total }</span></h4>
              </div>

              <button className="btn clear-btn" onClick={ onClickClear }>全削除</button>

            </footer>
          </div>
        )
      }

    </section>
  )
}

export default CartContainer