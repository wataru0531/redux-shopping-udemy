/**************************************************************

カート(商品、商品の合計数、商品の数)
Reducer、ActionCreatorをエクスポート

注意 Reducer名とActionの名前は同じ
    ツールキットを使えば、イミュータブルに処理される。immerによる

***************************************************************/
import { createSlice } from "@reduxjs/toolkit";

import cartItems from "../../cartItems";

// 初期値
const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

// Reducer、Action含む
const cartSlice = createSlice({
  name: "cart",                  // スライスの名前。任意。
  initialState: initialState,    // stateのこと

  // Reducer。ActionもReducerと同じ名前になるので注意(自動的に生成される)
  reducers: {      
    // 全削除
    // clearCart が自動的にActionCreatorの名前になる
    clearCart: (state, action) => {
      // console.log(state)

      return { 
        cartItems: [],
        amount: 0,
        total: 0,
      }
    },
    // アイテムを1つ削除
    removeItem: (state, action) => {
      // console.log(action) // {type: 'cart/removeItem', payload: 1}
      // actionのstate...  初期値
      // actionのtype ... 「スライスの名前 / reducerの名前」 が入る
      // { type: "cart/removeItem", payload: undefined }

      // payload...dispatchした時のActionの引数のこと dispatch(removeItem(id)

      // クリックしたアイテムと同じアイテム以外のものを残す
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload )
    },
    // アイテムを1つ追加
    increase: (state, action) => {
      // console.log(action); // {type: 'cart/increase', payload: 1}
      const cartItem = state.cartItems.find(item => item.id === action.payload);
      
      cartItem.amount += 1;
    },
    // アイテムを1つ減らす
    decrease: (state, action) => {
      // console.log(action)
      const cartItem = state.cartItems.find(item => item.id === action.payload);
      
      cartItem.amount -= 1;
    },
    // 合計金額 ... Appで発火
    calculateTotals: (state, action) => {
      // console.log(state)  // initialState
      // console.log(action) // {type: 'cart/calculateTotals', payload: undefined}

      let amount  = 0; // これらに足していく
      let total   = 0;

      state.cartItems.forEach(item => {
        amount += item.amount;               // アイテム１つの量
        total  += item.amount * item.price;  // アイテム1つの合計金額
      })

      state.amount = amount;
      state.total  = total;
    }
  }    
});

// console.log(cartSlice)

// Action 注意...ActionとReducerは同じ名前
export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

// Reducer
export default cartSlice.reducer;
