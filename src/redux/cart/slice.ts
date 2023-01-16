import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { calcTotalPrice } from '../../utils/calcTotalPrice';
import { getCartFromLS } from '../../utils/getCartFromLS';

// import { calcTotalPrice } from '../../utils/calcTotalPrice';
// import { getCartFromLS } from '../../utils/getCartFromLS';

import { CartItem, CartSliceState } from './types';

// const { items, totalPrice } = getCartFromLS();

const initialState: CartSliceState = getCartFromLS();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    // plusItem(state, action) {
    //   const findItem = state.items.find((obj) => obj.id === action.payload);
    //   if (findItem) {
    //     findItem.count++;
    //   }
    // },
    minusItem(state, action: PayloadAction<string>) {
      const findItem = state.items.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
        state.totalPrice = calcTotalPrice(state.items);
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearItem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

// export const selectCart = (state: RootState) => state.cart;

// export const selectCartItemById = (id: string) => (state: RootState) =>
//   state.cart.items.find((obj) => obj.id === id);

// export const selectCartItemById = (id, state) =>
//   state.cart.items.find((obj) => obj.id === id);

export const { addItem, removeItem, clearItem, minusItem } = cartSlice.actions;

export default cartSlice.reducer;
