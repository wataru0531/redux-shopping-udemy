/**************************************************************

useSelector ... 状態を呼び出す
useDispatch ... Reducerを発火させ、Actionを通知

***************************************************************/
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import './App.css';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from "./components/Modal.js";
import { calculateTotals } from './features/cart/CartSlice';


function App() {
  const dispatch = useDispatch();
  const { cartItems } =  useSelector(store => {
    // console.log(store); // {cart: {…}, modal: {…}}
    
    return store.cart;
  });

  const { isOpen } = useSelector(store => {
    // console.log(store)
    
    return store.modal;
  });

  useEffect(() => {
    dispatch(calculateTotals());

      // cartItemsの中身が変わるごとに発火させる
  }, [ cartItems ])

  
  return (
    <main>
      { isOpen && <Modal /> }
      <Navbar />
      <CartContainer />

    </main>
  );
}

export default App;
