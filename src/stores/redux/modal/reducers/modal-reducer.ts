import { createSlice } from '@reduxjs/toolkit';

interface ModalState {
  value: boolean;
}

const initialState: ModalState = {
  value: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    show: (state) => {
      state.value = true;
    },
    unshow: (state) => {
      state.value = false;
    },
  },
});

export const { show, unshow } = modalSlice.actions;
export default modalSlice.reducer;
