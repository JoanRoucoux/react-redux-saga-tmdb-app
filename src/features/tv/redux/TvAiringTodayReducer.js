import { Matcher } from '../../../core';
import TvActionTypes from './TvActionTypes';

const initialState = {
  tvAiringTodayResults: null,
  tvAiringTodayCurrentPage: null,
  tvAiringTodayTotalPages: null,
  tvAiringTodayTotalResults: null,
  loading: false,
  error: null,
};

const TvAiringTodayReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === TvActionTypes.TV_AIRING_TODAY_REQUEST,
    () => ({
      ...state,
      tvAiringTodayResults: null,
      tvAiringTodayCurrentPage: null,
      tvAiringTodayTotalPages: null,
      tvAiringTodayTotalResults: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === TvActionTypes.TV_AIRING_TODAY_REQUEST_SUCCESS,
    () => ({
      ...state,
      tvAiringTodayResults: action.tvAiringTodayResults,
      tvAiringTodayCurrentPage: action.tvAiringTodayCurrentPage,
      tvAiringTodayTotalPages: action.tvAiringTodayTotalPages,
      tvAiringTodayTotalResults: action.tvAiringTodayTotalResults,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === TvActionTypes.TV_AIRING_TODAY_REQUEST_FAILURE,
    () => ({
      ...state,
      tvAiringTodayResults: null,
      tvAiringTodayCurrentPage: null,
      tvAiringTodayTotalPages: null,
      tvAiringTodayTotalResults: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default TvAiringTodayReducer;
