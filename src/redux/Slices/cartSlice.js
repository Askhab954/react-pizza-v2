import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    addItemCount(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    removeItemCount(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);
      if (findItem.count  > 1)  {
         {
        findItem.count--;
        }
      }else{
        state.items = state.items.filter((obj) => obj.id !== action.payload.id);
      }
      state.totalPrice = state.items.reduce((sum, obj) =>  {
        return  sum + obj.price * obj.count;
      }, 0);
    },

    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) =>  {
        return  sum + obj.price * obj.count;
      }, 0);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addItem, removeItem, clearItems, addItemCount,  removeItemCount } = cartSlice.actions;

export default cartSlice.reducer;
