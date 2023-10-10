import { configureStore } from '@reduxjs/toolkit';
import laptopsReducer from './slices/laptopsSlice';
import mobilesReducer from './slices/mobilesSlice';
import usersReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    laptops: laptopsReducer,
    mobiles: mobilesReducer,
    users: usersReducer,
  },
});

export default store;
