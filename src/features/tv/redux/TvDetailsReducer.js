import { Matcher } from '../../../core';
import TvActionTypes from './TvActionTypes';

const initialState = {
  tvDetails: null,
  loading: false,
  error: null,
};

const TvDetailsReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === TvActionTypes.TV_DETAILS_REQUEST,
    () => ({
      ...state,
      tvDetails: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === TvActionTypes.TV_DETAILS_REQUEST_FAILURE,
    () => ({
      ...state,
      tvDetails: action.tvDetails,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === TvActionTypes.TV_DETAILS_REQUEST_FAILURE,
    () => ({
      ...state,
      tvDetails: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default TvDetailsReducer;
