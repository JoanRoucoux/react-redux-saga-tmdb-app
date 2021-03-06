import { Matcher } from '../../../core';
import AccountActionTypes from './AccountActionTypes';

const initialState = {
  personPopularResults: null,
  personPopularCurrentPage: null,
  personPopularTotalPages: null,
  personPopularTotalResults: null,
  loading: false,
  error: null,
};

const AccountFavoriteMoviesReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === AccountActionTypes.ACCOUNT_FAVORITE_MOVIES_REQUEST,
    () => ({
      ...state,
      personPopularResults: null,
      personPopularCurrentPage: null,
      personPopularTotalPages: null,
      personPopularTotalResults: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === AccountActionTypes.ACCOUNT_FAVORITE_MOVIES_REQUEST_SUCCESS,
    () => ({
      ...state,
      personPopularResults: action.personPopularResults,
      personPopularCurrentPage: action.personPopularCurrentPage,
      personPopularTotalPages: action.personPopularTotalPages,
      personPopularTotalResults: action.personPopularTotalResults,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === AccountActionTypes.ACCOUNT_FAVORITE_MOVIES_REQUEST_FAILURE,
    () => ({
      ...state,
      personPopularResults: null,
      personPopularCurrentPage: null,
      personPopularTotalPages: null,
      personPopularTotalResults: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default AccountFavoriteMoviesReducer;
