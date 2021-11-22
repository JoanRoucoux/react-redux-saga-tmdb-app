import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { SearchActionTypes } from '../redux';
import SearchServicesConstants from './SearchServicesConstants';
import SearchApi from './SearchApi';

// service status
const {
  SEARCH_MULTI_REQUEST_SUCCESS,
  SEARCH_MULTI_REQUEST_FAILURE,
} = SearchActionTypes;

const {
  GET_SEARCH_MULTI_SERVICE_PATH,
} = SearchServicesConstants;

const {
  searchMultiQuery,
} = SearchApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getSearchMulti(action) {
  try {
    // execute query
    const response = yield call(searchMultiQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);

    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[SearchMultiService] Service call '
          + `${GET_SEARCH_MULTI_SERVICE_PATH} KO`, error);
      yield put({
        type: SEARCH_MULTI_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[SearchMultiService] Service call '
          + `${GET_SEARCH_MULTI_SERVICE_PATH} OK`, data);
      yield put({
        type: SEARCH_MULTI_REQUEST_SUCCESS,
        personPopularResults: data?.results,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[SearchMultiService] Service call '
          + `${GET_SEARCH_MULTI_SERVICE_PATH} KO`, error);
    yield put({
      type: SEARCH_MULTI_REQUEST_FAILURE,
      error,
    });
  }
}
