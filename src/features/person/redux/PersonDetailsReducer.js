import { Matcher } from '../../../core';
import PersonActionTypes from './PersonActionTypes';

const initialState = {
  personDetails: null,
  loading: false,
  error: null,
};

const PersonDetailsReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === PersonActionTypes.PERSON_DETAILS_REQUEST,
    () => ({
      ...state,
      personDetails: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === PersonActionTypes.PERSON_DETAILS_REQUEST_SUCCESS,
    () => ({
      ...state,
      personDetails: action.personDetails,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === PersonActionTypes.PERSON_DETAILS_REQUEST_FAILURE,
    () => ({
      ...state,
      personDetails: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default PersonDetailsReducer;
