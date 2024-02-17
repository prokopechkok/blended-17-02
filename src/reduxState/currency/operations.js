import { createAsyncThunk } from '@reduxjs/toolkit';
import { exchangeCurrency } from 'service/exchangeAPI';
import { getUserInfo } from 'service/opencagedataApi';

export const fetchBaseCurrency = createAsyncThunk(
  'currency/fetchBaseCurrency',
  async (coords, thunkApi) => {
    const state = thunkApi.getState();
    const { baseCurrency } = state.currency;

    if (baseCurrency) {
      return thunkApi.rejectWithValue('We already have base currency!');
    }
    try {
      const data = await getUserInfo(coords);
      return data.results[0].annotations.currency.iso_code;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const fetchExchangeCurrency = createAsyncThunk(
  'currency/fetchExchangeInfo',
  async (credentials, thunkApi) => {
    try {
      const data = await exchangeCurrency(credentials);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
