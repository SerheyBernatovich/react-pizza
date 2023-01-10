import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../stor';

type Sort = {
  name: string;
  sortProperty: 'rating' | 'price' | 'title' | '-rating' | '-price' | '-title';
};

interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: Sort;
}

const initialState: FilterSliceState = {
  searchValue: '',
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярність',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setCurentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      if (Object.keys(action.payload).length) {
        state.sort = action.payload.sort;
        state.currentPage = Number(action.payload.currentPage);
        state.categoryId = Number(action.payload.categoryId);
      } else {
        state.currentPage = 1;
        state.categoryId = 0;
        state.sort = { name: 'популярність', sortProperty: 'rating' };
      }
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const {
  setSearchValue,
  setCategoryId,
  setSort,
  setCurentPage,
  setFilters,
} = filterSlice.actions;

export default filterSlice.reducer;
