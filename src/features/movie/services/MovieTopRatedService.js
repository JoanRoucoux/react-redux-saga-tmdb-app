import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { MovieActionTypes } from '../redux';
import MovieServicesConstants from './MovieServicesConstants';
import MovieApi from './MovieApi';

// service status
const {
  MOVIE_TOP_RATED_REQUEST_SUCCESS,
  MOVIE_TOP_RATED_REQUEST_FAILURE,
} = MovieActionTypes;

const {
  GET_MOVIE_TOP_RATED_SERVICE_PATH,
} = MovieServicesConstants;

const {
  movieTopRatedQuery,
} = MovieApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getMovieTopRated(action) {
  try {
    // execute query
    const response = yield call(movieTopRatedQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);
    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[MovieTopRatedService] Service call '
          + `${GET_MOVIE_TOP_RATED_SERVICE_PATH} KO`, error);
      yield put({
        type: MOVIE_TOP_RATED_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[MovieTopRatedService] Service call '
          + `${GET_MOVIE_TOP_RATED_SERVICE_PATH} OK`, data);
      yield put({
        type: MOVIE_TOP_RATED_REQUEST_SUCCESS,
        movieDetails: data,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[MovieTopRatedService] Service call '
          + `${GET_MOVIE_TOP_RATED_SERVICE_PATH} KO`, error);
    yield put({
      type: MOVIE_TOP_RATED_REQUEST_FAILURE,
      error,
    });
  }
}
