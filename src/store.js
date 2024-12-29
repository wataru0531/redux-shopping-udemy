import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./features/cart/CartSlice.js";
import modalReducer from "./features/modal/ModalSlice.js";

export const store = configureStore({
  // reducerにスライスを渡す
  reducer: {
    // cart ... useSelectorで呼び出す際に使用  useSelector(store => store.cart)
    // 任意に命名可能
    cart: cartReducer,     
    modal: modalReducer,
  },
});

// console.log(store)