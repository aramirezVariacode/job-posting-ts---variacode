import { createSlice } from '@reduxjs/toolkit'

export interface UiSliceProps{
    isModalOpen:boolean,
}
const initialState : UiSliceProps = {
isModalOpen:false
}

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    onOpenModal: (state) =>{
        state.isModalOpen = true;
    },
    onCloseModal : (state) =>{
     state.isModalOpen = false;
    }
  }
});

export const {onOpenModal,onCloseModal} = uiSlice.actions

