import { createSlice } from '@reduxjs/toolkit';

const mobilesSlice = createSlice({
  name: 'mobiles',
  initialState: {
    stock: 20,
    orders: 0
  },
  reducers: {
    orderMobile: (state) => {
      if (state.stock > 0) {
        state.stock -= 1;
        state.orders += 1;
      }
    },
  },
});

export const { orderMobile } = mobilesSlice.actions;
export default mobilesSlice.reducer;
