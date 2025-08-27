import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './counterSlice';
import { todoReducer } from './todoSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productReducer } from './productsSlice';
import { cartReducer } from './cartSlice';
import { favReducer } from './FavouritesSlice';

const persistConfig = {
  key: 'products',
  version: 1,
  storage,
  whiteList: [],
  blackList: [],
};
const persistFavConfig = {
  key: 'favourites',
  version: 1,
  storage,
  whiteList: [],
  blackList: [],
};

const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedFavReducer = persistReducer(persistFavConfig, favReducer);

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    products: productReducer,
    cart: persistedReducer,
    favourites: persistedFavReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
