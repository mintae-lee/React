import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/products/productsSlice';
import favouritesReducer from '../features/favourites/favouritesSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    favourites: favouritesReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
