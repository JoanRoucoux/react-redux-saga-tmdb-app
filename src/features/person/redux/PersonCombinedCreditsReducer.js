import { Matcher } from '../../../core';
import PersonActionTypes from './PersonActionTypes';

const initialState = {
  personCombinedCredits: null,
  loading: false,
  error: null,
};

const PersonCombinedCreditsReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === PersonActionTypes.PERSON_COMBINED_CREDITS_REQUEST,
    () => ({
      ...state,
      personCombinedCredits: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === PersonActionTypes.PERSON_COMBINED_CREDITS_REQUEST_SUCCESS,
    () => ({
      ...state,
      personCombinedCredits: action.personCombinedCredits,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === PersonActionTypes.PERSON_COMBINED_CREDITS_REQUEST_FAILURE,
    () => ({
      ...state,
      personCombinedCredits: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default PersonCombinedCreditsReducer;
