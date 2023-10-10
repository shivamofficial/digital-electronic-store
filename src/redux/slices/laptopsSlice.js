import { createSlice } from '@reduxjs/toolkit';

const laptopsSlice = createSlice({
  name: 'laptops',
  initialState: {
    stockLessThan2Lakh: 5,
    stockGreaterThan2Lakh: 5,
    orderslessThan2Lakh: 0,
    ordersgreaterThan2Lakh: 0,
  },
  reducers: {
    orderLaptopLessThan2Lakh: (state) => {
      if (state.stockLessThan2Lakh > 0) {
        state.stockLessThan2Lakh -= 1;
        state.orderslessThan2Lakh += 1; // Increment order count for laptops less than 2 lakh
      }
    },
    orderLaptopGreaterThan2Lakh: (state) => {
      if (state.stockGreaterThan2Lakh > 0) {
        state.stockGreaterThan2Lakh -= 1;
        state.ordersgreaterThan2Lakh += 1; // Increment order count for laptops greater than 2 lakh
      }
    },
  },
});

export const {
  orderLaptopLessThan2Lakh,
  orderLaptopGreaterThan2Lakh,
} = laptopsSlice.actions;
export default laptopsSlice.reducer;
