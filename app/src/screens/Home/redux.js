import { createReducer, createActions } from 'reduxsauce';

export const { Types, Creators } = createActions(
  {
    fetchCurrencies: ['params'],
    fetchCurrenciesLoading: null,
    fetchCurrenciesSuccess: ['currencies'],
    fetchCurrenciesError: ['message'],
  },
  { prefix: 'CURRENCIES/' }
);

export const INITIAL_STATE = {
  currencies: [],
  currenciesLoading: false,
  currenciesError: null,
};

const fetchCurrenciesLoading = state => ({
  ...state,
  currenciesLoading: true,
});

const fetchCurrenciesSuccess = (state, action) => ({
  ...state,
  currencies: action.currencies,
  currenciesLoading: false,
  currenciesError: null,
});

const fetchCurrenciesError = (state, action) => ({
  ...state,
  currencies: [],
  currenciesLoading: false,
  currenciesError: action.message,
});

export default createReducer(INITIAL_STATE, {
  [Types.FETCH_CURRENCIES_LOADING]: fetchCurrenciesLoading,
  [Types.FETCH_CURRENCIES_SUCCESS]: fetchCurrenciesSuccess,
  [Types.FETCH_CURRENCIES_ERROR]: fetchCurrenciesError,
});
