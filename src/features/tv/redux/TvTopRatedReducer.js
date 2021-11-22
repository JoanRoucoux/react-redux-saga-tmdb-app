import { Matcher } from '../../../core';
import TvActionTypes from './TvActionTypes';

const initialState = {
  tvTopRatedResults: null,
  tvTopRatedCurrentPage: null,
  tvTopRatedTotalPages: null,
  tvTopRatedTotalResults: null,
  loading: false,
  error: null,
};

const TvTopRatedReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === TvActionTypes.TV_TOP_RATED_REQUEST,
    () => ({
      ...state,
      tvTopRatedResults: null,
      tvTopRatedCurrentPage: null,
      tvTopRatedTotalPages: null,
      tvTopRatedTotalResults: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === TvActionTypes.TV_TOP_RATED_REQUEST_SUCCESS,
    () => ({
      ...state,
      tvTopRatedResults: action.tvTopRatedResults,
      tvTopRatedCurrentPage: action.tvTopRatedCurrentPage,
      tvTopRatedTotalPages: action.tvTopRatedTotalPages,
      tvTopRatedTotalResults: action.tvTopRatedTotalResults,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === TvActionTypes.TV_TOP_RATED_REQUEST_FAILURE,
    () => ({
      ...state,
      tvTopRatedResults: null,
      tvTopRatedCurrentPage: null,
      tvTopRatedTotalPages: null,
      tvTopRatedTotalResults: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default TvTopRatedReducer;
