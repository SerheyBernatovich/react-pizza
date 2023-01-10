import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../stor';

// create the thunk
export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzasStatus',
  async (params) => {
    const { sortBy, order, category, search, currentPage } = params;
    const { data } = await axios.get(
      `https://639c590f16d1763ab14707cf.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
    );

    return data;
  }
);
type Pizza = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};
interface PizzasSliceState {
  items: Pizza[];
  status: 'loading' | 'succes' | 'error';
}

const initialState: PizzasSliceState = {
  items: [],
  status: 'loading',
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItem(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const selectPizzaData = (state: RootState) => state.pizza;

export const { setItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
