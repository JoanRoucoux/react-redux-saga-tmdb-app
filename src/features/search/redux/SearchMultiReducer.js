import { Matcher } from '../../../core';
import SearchActionTypes from './SearchActionTypes';

const initialState = {
  searchMulti: null,
  loading: false,
  error: null,
};

const SearchMultiReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === SearchActionTypes.SEARCH_MULTI_REQUEST,
    () => ({
      ...state,
      searchMulti: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === SearchActionTypes.SEARCH_MULTI_REQUEST_SUCCESS,
    () => ({
      ...state,
      searchMulti: action.searchMulti,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === SearchActionTypes.SEARCH_MULTI_REQUEST_FAILURE,
    () => ({
      ...state,
      searchMulti: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default SearchMultiReducer;
