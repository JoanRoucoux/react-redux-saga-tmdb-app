import PersonActionTypes from './PersonActionTypes';

const {
  PERSON_COMBINED_CREDITS_REQUEST,
  PERSON_DETAILS_REQUEST,
  PERSON_POPULAR_REQUEST,
} = PersonActionTypes;

const PersonDispatcher = {
  requestPersonCombinedCredits: (data) => ({
    type: PERSON_COMBINED_CREDITS_REQUEST,
    payload: data,
  }),

  requestPersonDetails: (data) => ({
    type: PERSON_DETAILS_REQUEST,
    payload: data,
  }),

  requestPersonPopular: (data) => ({
    type: PERSON_POPULAR_REQUEST,
    payload: data,
  }),
};

export default PersonDispatcher;
