import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  filter: '',
};

const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload,
      );
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const cartReducer = slice.reducer;
export const { addCartItem, removeCartItem, clearCart } = slice.actions;
