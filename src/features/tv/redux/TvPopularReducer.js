import { Matcher } from '../../../core';
import TvActionTypes from './TvActionTypes';

const initialState = {
  tvPopularResults: null,
  tvPopularCurrentPage: null,
  tvPopularTotalPages: null,
  tvPopularTotalResults: null,
  loading: false,
  error: null,
};

const MoviePopularReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === TvActionTypes.TV_POPULAR_REQUEST,
    () => ({
      ...state,
      tvPopularResults: null,
      tvPopularCurrentPage: null,
      tvPopularTotalPages: null,
      tvPopularTotalResults: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === TvActionTypes.TV_POPULAR_REQUEST_SUCCESS,
    () => ({
      ...state,
      tvPopularResults: action.tvPopularResults,
      tvPopularCurrentPage: action.tvPopularCurrentPage,
      tvPopularTotalPages: action.tvPopularTotalPages,
      tvPopularTotalResults: action.tvPopularTotalResults,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === TvActionTypes.TV_POPULAR_REQUEST_FAILURE,
    () => ({
      ...state,
      tvPopularResults: null,
      tvPopularCurrentPage: null,
      tvPopularTotalPages: null,
      tvPopularTotalResults: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default MoviePopularReducer;
