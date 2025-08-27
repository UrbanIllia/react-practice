import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  filter: '',
};

const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const productReducer = slice.reducer;
export const { setProducts } = slice.actions;
