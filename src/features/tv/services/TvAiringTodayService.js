import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { TvActionTypes } from '../redux';
import TvServicesConstants from './TvServicesConstants';
import TvApi from './TvApi';

// service status
const {
  TV_AIRING_TODAY_REQUEST_SUCCESS,
  TV_AIRING_TODAY_REQUEST_FAILURE,
} = TvActionTypes;

const {
  GET_TV_AIRING_TODAY_SERVICE_PATH,
} = TvServicesConstants;

const {
  tvAiringTodayQuery,
} = TvApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getTvAiringToday(action) {
  try {
    // execute query
    const response = yield call(tvAiringTodayQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);
    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[TvAiringTodayService] Service call '
          + `${GET_TV_AIRING_TODAY_SERVICE_PATH} KO`, error);
      yield put({
        type: TV_AIRING_TODAY_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[TvAiringTodayService] Service call '
          + `${GET_TV_AIRING_TODAY_SERVICE_PATH} OK`, data);
      yield put({
        type: TV_AIRING_TODAY_REQUEST_SUCCESS,
        tvDetails: data,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[TvAiringTodayService] Service call '
          + `${GET_TV_AIRING_TODAY_SERVICE_PATH} KO`, error);
    yield put({
      type: TV_AIRING_TODAY_REQUEST_FAILURE,
      error,
    });
  }
}
