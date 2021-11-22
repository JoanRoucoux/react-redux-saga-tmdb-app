import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { MovieActionTypes } from '../redux';
import MovieServicesConstants from './MovieServicesConstants';
import MovieApi from './MovieApi';

// service status
const {
  MOVIE_UPCOMING_REQUEST_SUCCESS,
  MOVIE_UPCOMING_REQUEST_FAILURE,
} = MovieActionTypes;

const {
  GET_MOVIE_UPCOMING_SERVICE_PATH,
} = MovieServicesConstants;

const {
  movieUpcomingQuery,
} = MovieApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getMovieUpcoming(action) {
  try {
    // execute query
    const response = yield call(movieUpcomingQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);
    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[MovieUpcomingService] Service call '
          + `${GET_MOVIE_UPCOMING_SERVICE_PATH} KO`, error);
      yield put({
        type: MOVIE_UPCOMING_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[MovieUpcomingService] Service call '
          + `${GET_MOVIE_UPCOMING_SERVICE_PATH} OK`, data);
      yield put({
        type: MOVIE_UPCOMING_REQUEST_SUCCESS,
        movieDetails: data,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[MovieUpcomingService] Service call '
          + `${GET_MOVIE_UPCOMING_SERVICE_PATH} KO`, error);
    yield put({
      type: MOVIE_UPCOMING_REQUEST_FAILURE,
      error,
    });
  }
}
