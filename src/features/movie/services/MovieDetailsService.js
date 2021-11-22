import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { MovieActionTypes } from '../redux';
import MovieServicesConstants from './MovieServicesConstants';
import MovieApi from './MovieApi';

const {
  MOVIE_DETAILS_REQUEST_SUCCESS,
  MOVIE_DETAILS_REQUEST_FAILURE,
} = MovieActionTypes;

const {
  GET_PERSON_DETAILS_SERVICE_PATH,
} = MovieServicesConstants;

const {
  movieDetailsQuery,
} = MovieApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getMovieDetails(action) {
  try {
    // execute query
    const response = yield call(movieDetailsQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);
    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[MovieDetailsService] Service call '
          + `${GET_PERSON_DETAILS_SERVICE_PATH} KO`, error);
      yield put({
        type: MOVIE_DETAILS_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[MovieDetailsService] Service call '
          + `${GET_PERSON_DETAILS_SERVICE_PATH} OK`, data);
      yield put({
        type: MOVIE_DETAILS_REQUEST_SUCCESS,
        movieDetails: data,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[MovieDetailsService] Service call '
          + `${GET_PERSON_DETAILS_SERVICE_PATH} KO`, error);
    yield put({
      type: MOVIE_DETAILS_REQUEST_FAILURE,
      error,
    });
  }
}
