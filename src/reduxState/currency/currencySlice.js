import { createSlice } from '@reduxjs/toolkit';
import { fetchBaseCurrency, fetchExchangeCurrency } from './operations';

const initialState = {
  baseCurrency: '',
  exchangeInfo: null,
};
export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setBaseCurrency: (state, { payload }) => {
      state.baseCurrency = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchBaseCurrency.fulfilled, (state, { payload }) => {
        state.baseCurrency = payload;
      })
      .addCase(fetchExchangeCurrency.fulfilled, (state, { payload }) => {
        state.exchangeInfo = payload;
      }),
});

export const { setBaseCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
