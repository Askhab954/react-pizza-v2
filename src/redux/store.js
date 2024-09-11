import { configureStore } from '@reduxjs/toolkit';
import filter from './Slices/filterSlice';
import cartReducer from './Slices/cartSlice';

export const store = configureStore({
  reducer: {
    filter: filter,
    cart: cartReducer,
  },
});
