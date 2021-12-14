import { call, put } from 'redux-saga/effects';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { TvActionTypes } from '../redux';
import TvServicesConstants from './TvServicesConstants';
import TvApi from './TvApi';

const {
  TV_DETAILS_REQUEST_SUCCESS,
  TV_DETAILS_REQUEST_FAILURE,
} = TvActionTypes;

const {
  GET_PERSON_DETAILS_SERVICE_PATH,
} = TvServicesConstants;

const {
  tvDetailsQuery,
} = TvApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getTvDetails(action) {
  try {
    // execute query
    const response = yield call(tvDetailsQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);
    if (error) {
      // dispatch a failure action
      // to the store with the error
      console.log('[TvDetailsService] Service call '
          + `${GET_PERSON_DETAILS_SERVICE_PATH} KO`, error);
      yield put({
        type: TV_DETAILS_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[TvDetailsService] Service call '
          + `${GET_PERSON_DETAILS_SERVICE_PATH} OK`, data);
      yield put({
        type: TV_DETAILS_REQUEST_SUCCESS,
        tvDetails: data,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    console.log('[TvDetailsService] Service call '
          + `${GET_PERSON_DETAILS_SERVICE_PATH} KO`, error);
    yield put({
      type: TV_DETAILS_REQUEST_FAILURE,
      error,
    });
  }
}
