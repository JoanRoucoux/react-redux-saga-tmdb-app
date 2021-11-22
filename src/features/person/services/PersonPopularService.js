import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { PersonActionTypes } from '../redux';
import PersonServicesConstants from './PersonServicesConstants';
import PersonApi from './PersonApi';

// service status
const {
  PERSON_POPULAR_REQUEST_SUCCESS,
  PERSON_POPULAR_REQUEST_FAILURE,
} = PersonActionTypes;

const {
  GET_PERSON_POPULAR_SERVICE_PATH,
} = PersonServicesConstants;

// service query
const {
  personPopularQuery,
} = PersonApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getPersonPopular(action) {
  try {
    // execute query
    const response = yield call(personPopularQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);

    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[PersonPopularService] Service call '
          + `${GET_PERSON_POPULAR_SERVICE_PATH} KO`, error);
      yield put({
        type: PERSON_POPULAR_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[PersonPopularService] Service call '
          + `${GET_PERSON_POPULAR_SERVICE_PATH} OK`, data);
      yield put({
        type: PERSON_POPULAR_REQUEST_SUCCESS,
        personPopularResults: data?.results,
        personPopularCurrentPage: data?.page,
        personPopularTotalPages: data?.total_pages,
        personPopularTotalResults: data?.total_results,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[PersonPopularService] Service call '
          + `${GET_PERSON_POPULAR_SERVICE_PATH} KO`, error);
    yield put({
      type: PERSON_POPULAR_REQUEST_FAILURE,
      error,
    });
  }
}
