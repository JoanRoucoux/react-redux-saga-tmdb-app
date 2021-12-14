import { call, put } from 'redux-saga/effects';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { PersonActionTypes } from '../redux';
import PersonServicesConstants from './PersonServicesConstants';
import PersonApi from './PersonApi';

// service status
const {
  PERSON_COMBINED_CREDITS_REQUEST_SUCCESS,
  PERSON_COMBINED_CREDITS_REQUEST_FAILURE,
} = PersonActionTypes;

const {
  GET_PERSON_DETAILS_SERVICE_PATH,
} = PersonServicesConstants;

// service query
const {
  personCombinedCreditsQuery,
} = PersonApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getPersonCombinedCredits(action) {
  try {
    // execute query
    const response = yield call(personCombinedCreditsQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);
    if (error) {
      // dispatch a failure action
      // to the store with the error
      console.log('[PersonCombinedCreditsService] Service call '
          + `${GET_PERSON_DETAILS_SERVICE_PATH} KO`, error);
      yield put({
        type: PERSON_COMBINED_CREDITS_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[PersonCombinedCreditsService] Service call '
          + `${GET_PERSON_DETAILS_SERVICE_PATH} OK`, data);
      yield put({
        type: PERSON_COMBINED_CREDITS_REQUEST_SUCCESS,
        personDetails: data,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    console.log('[PersonCombinedCreditsService] Service call '
          + `${GET_PERSON_DETAILS_SERVICE_PATH} KO`, error);
    yield put({
      type: PERSON_COMBINED_CREDITS_REQUEST_FAILURE,
      error,
    });
  }
}
