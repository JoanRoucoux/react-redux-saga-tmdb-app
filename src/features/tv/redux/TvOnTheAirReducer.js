import { Matcher } from '../../../core';
import TvActionTypes from './TvActionTypes';

const initialState = {
  tvOnTheAirResults: null,
  tvOnTheAirCurrentPage: null,
  tvOnTheAirTotalPages: null,
  tvOnTheAirTotalResults: null,
  loading: false,
  error: null,
};

const TvOnTheAirReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === TvActionTypes.TV_ON_THE_AIR_REQUEST,
    () => ({
      ...state,
      tvOnTheAirResults: null,
      tvOnTheAirCurrentPage: null,
      tvOnTheAirTotalPages: null,
      tvOnTheAirTotalResults: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === TvActionTypes.TV_ON_THE_AIR_REQUEST_SUCCESS,
    () => ({
      ...state,
      tvOnTheAirResults: action.tvOnTheAirResults,
      tvOnTheAirCurrentPage: action.tvOnTheAirCurrentPage,
      tvOnTheAirTotalPages: action.tvOnTheAirTotalPages,
      tvOnTheAirTotalResults: action.tvOnTheAirTotalResults,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === TvActionTypes.TV_ON_THE_AIR_REQUEST_FAILURE,
    () => ({
      ...state,
      tvOnTheAirResults: null,
      tvOnTheAirCurrentPage: null,
      tvOnTheAirTotalPages: null,
      tvOnTheAirTotalResults: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default TvOnTheAirReducer;
