import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { TvActionTypes } from '../redux';
import TvServicesConstants from './TvServicesConstants';
import TvApi from './TvApi';

// service status
const {
  TV_POPULAR_REQUEST_SUCCESS,
  TV_POPULAR_REQUEST_FAILURE,
} = TvActionTypes;

const {
  GET_TV_POPULAR_SERVICE_PATH,
} = TvServicesConstants;

const {
  tvPopularQuery,
} = TvApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getTvPopular(action) {
  try {
    // execute query
    const response = yield call(tvPopularQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);

    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[TvPopularService] Service call '
          + `${GET_TV_POPULAR_SERVICE_PATH} KO`, error);
      yield put({
        type: TV_POPULAR_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[TvPopularService] Service call '
          + `${GET_TV_POPULAR_SERVICE_PATH} OK`, data);
      yield put({
        type: TV_POPULAR_REQUEST_SUCCESS,
        tvPopularResults: data?.results,
        tvPopularCurrentPage: data?.page,
        tvPopularTotalPages: data?.total_pages,
        tvPopularTotalResults: data?.total_results,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[TvPopularService] Service call '
          + `${GET_TV_POPULAR_SERVICE_PATH} KO`, error);
    yield put({
      type: TV_POPULAR_REQUEST_FAILURE,
      error,
    });
  }
}
