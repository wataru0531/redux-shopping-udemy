/**************************************************************

モーダル

***************************************************************/
import React from 'react'
import { useDispatch } from 'react-redux'

import { clearCart } from '../features/cart/CartSlice';
import { closeModal } from '../features/modal/ModalSlice'


const Modal = () => {
  const dispatch = useDispatch();

  // 全削除 + モーダルを閉じる
  const onClickAllClear = () => {
    dispatch(clearCart());

    dispatch(closeModal())
  }

  //  モーダルを閉じる
  const onClickCloseModal = () => {
    dispatch(closeModal())
  }


  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>買いものかごを全て空にしますか？</h4>
        <div className="btn-container">
          <button className="btn confirm-btn" onClick={ onClickAllClear }>OK</button>
          
          <button className="btn clear-btn" onClick={ onClickCloseModal }>やめとく</button>
        </div>
      </div>
      </aside>
  )
}

export default Modal