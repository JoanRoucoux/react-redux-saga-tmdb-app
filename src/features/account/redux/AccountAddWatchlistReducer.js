import { Matcher } from '../../../core';
import AccountActionTypes from './AccountActionTypes';

const initialState = {
  personPopularResults: null,
  loading: false,
  error: null,
};

const AccountAddWatchlistReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === AccountActionTypes.ACCOUNT_ADD_WATCHLIST_REQUEST,
    () => ({
      ...state,
      personPopularResults: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === AccountActionTypes.ACCOUNT_ADD_WATCHLIST_REQUEST_SUCCESS,
    () => ({
      ...state,
      personPopularResults: action.personPopularResults,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === AccountActionTypes.ACCOUNT_ADD_WATCHLIST_REQUEST_FAILURE,
    () => ({
      ...state,
      personPopularResults: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default AccountAddWatchlistReducer;
