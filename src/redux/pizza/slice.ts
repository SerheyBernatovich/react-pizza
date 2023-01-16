import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { fetchPizzas } from './asyncActions';
import { Pizza, PizzasSliceState, SearchPizzaParams, Status } from './types';

// export const fetchPizzas = createAsyncThunk<Pizza[], SearchPizzaParams>(
//   'pizza/fetchPizzasStatus',
//   async (params) => {
//     const { sortBy, order, category, search, currentPage } = params;
//     const { data } = await axios.get<Pizza[]>(
//       `https://639c590f16d1763ab14707cf.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`
//     );

//     return data;
//   }
// );

const initialState: PizzasSliceState = {
  items: [],
  status: Status.LOADING,
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItem(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
  // You can use this when you dont use typescript

  // extraReducers: {
  //   [fetchPizzas.pending]: (state) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   },
  //   [fetchPizzas.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //   },
  //   [fetchPizzas.rejected]: (state) => {
  //     state.status = 'error';
  //     state.items = [];
  //   },
  // },
});
export const { setItem } = pizzaSlice.actions;

export default pizzaSlice.reducer;
