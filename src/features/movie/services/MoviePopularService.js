import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { MovieActionTypes } from '../redux';
import MovieServicesConstants from './MovieServicesConstants';
import MovieApi from './MovieApi';

// service status
const {
  MOVIE_POPULAR_REQUEST_SUCCESS,
  MOVIE_POPULAR_REQUEST_FAILURE,
} = MovieActionTypes;

const {
  GET_PERSON_POPULAR_SERVICE_PATH,
} = MovieServicesConstants;

const {
  moviePopularQuery,
} = MovieApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getMoviePopular(action) {
  try {
    // execute query
    const response = yield call(moviePopularQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);

    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[MoviePopularService] Service call '
          + `${GET_PERSON_POPULAR_SERVICE_PATH} KO`, error);
      yield put({
        type: MOVIE_POPULAR_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[MoviePopularService] Service call '
          + `${GET_PERSON_POPULAR_SERVICE_PATH} OK`, data);
      yield put({
        type: MOVIE_POPULAR_REQUEST_SUCCESS,
        moviePopularResults: data?.results,
        moviePopularCurrentPage: data?.page,
        moviePopularTotalPages: data?.total_pages,
        moviePopularTotalResults: data?.total_results,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[MoviePopularService] Service call '
          + `${GET_PERSON_POPULAR_SERVICE_PATH} KO`, error);
    yield put({
      type: MOVIE_POPULAR_REQUEST_FAILURE,
      error,
    });
  }
}
