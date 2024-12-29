/**************************************************************

モーダルに関するスライス

Reducer、Action Creatorをエクスポート

***************************************************************/
import { createSlice } from "@reduxjs/toolkit";


// 初期値
const initialState = {
  isOpen: false,
}

const modalSlice = createSlice({
  name: "modal",                // スライスの名前
  initialState: initialState,   // state

  reducers: {                   // Reducer...Reducer名とAction名は同じなので注意
    // openModalがActionCreatorの名前になる
    openModal: (state, action) => {
      // console.log(state)   // initialState
      // console.log(action); // {type: 'modal/openModal', payload: undefined}

      state.isOpen = true;
    },

    closeModal: (state, action) => {
      state.isOpen = false;
    }
  }
})

// console.log(modalSlice)


// ActionCreator
export const { openModal, closeModal } = modalSlice.actions;

// Reducer
export default modalSlice.reducer;