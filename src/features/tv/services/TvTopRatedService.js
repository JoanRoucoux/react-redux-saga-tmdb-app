import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { TvActionTypes } from '../redux';
import TvServicesConstants from './TvServicesConstants';
import TvApi from './TvApi';

// service status
const {
  TV_TOP_RATED_REQUEST_SUCCESS,
  TV_TOP_RATED_REQUEST_FAILURE,
} = TvActionTypes;

const {
  GET_TV_TOP_RATED_SERVICE_PATH,
} = TvServicesConstants;

const {
  tvTopRatedQuery,
} = TvApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getTvTopRated(action) {
  try {
    // execute query
    const response = yield call(tvTopRatedQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);
    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[TvTopRatedService] Service call '
          + `${GET_TV_TOP_RATED_SERVICE_PATH} KO`, error);
      yield put({
        type: TV_TOP_RATED_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[TvTopRatedService] Service call '
          + `${GET_TV_TOP_RATED_SERVICE_PATH} OK`, data);
      yield put({
        type: TV_TOP_RATED_REQUEST_SUCCESS,
        movieDetails: data,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[TvTopRatedService] Service call '
          + `${GET_TV_TOP_RATED_SERVICE_PATH} KO`, error);
    yield put({
      type: TV_TOP_RATED_REQUEST_FAILURE,
      error,
    });
  }
}
