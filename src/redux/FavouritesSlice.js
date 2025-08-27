import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favProducts: [],
  filter: '',
};

const slice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavProduct: (state, action) => {
      state.favProducts.push(action.payload);
    },
    removeFavProducts: (state, action) => {
      state.favProducts = state.favProducts.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const favReducer = slice.reducer;
export const { addFavProduct, removeFavProducts } = slice.actions;
