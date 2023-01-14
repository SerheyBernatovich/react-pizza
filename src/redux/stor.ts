import { configureStore } from '@reduxjs/toolkit';
import filter from './slices/filter/slise';
import cart from './slices/cart/slice';
import pizza from './slices/pizza/slice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    filter,
    cart,
    pizza,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppDispatch: () => AppDispatch = useDispatch; // Export a hook that can be reused to resolve types
