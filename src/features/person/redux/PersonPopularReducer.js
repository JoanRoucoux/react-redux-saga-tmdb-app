import { Matcher } from '../../../core';
import PersonActionTypes from './PersonActionTypes';

const initialState = {
  personPopularResults: null,
  personPopularCurrentPage: null,
  personPopularTotalPages: null,
  personPopularTotalResults: null,
  loading: false,
  error: null,
};

const PersonPopularReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === PersonActionTypes.PERSON_POPULAR_REQUEST,
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
    () => action.type === PersonActionTypes.PERSON_POPULAR_REQUEST_SUCCESS,
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
    () => action.type === PersonActionTypes.PERSON_POPULAR_REQUEST_FAILURE,
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

export default PersonPopularReducer;
