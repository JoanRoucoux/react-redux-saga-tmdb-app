import { Matcher } from '../../../core';
import MovieActionTypes from './MovieActionTypes';

const initialState = {
  movieUpcomingResults: null,
  movieUpcomingCurrentPage: null,
  movieUpcomingTotalPages: null,
  movieUpcomingTotalResults: null,
  loading: false,
  error: null,
};

const MovieUpcomingReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === MovieActionTypes.MOVIE_POPULAR_REQUEST,
    () => ({
      ...state,
      movieUpcomingResults: null,
      movieUpcomingCurrentPage: null,
      movieUpcomingTotalPages: null,
      movieUpcomingTotalResults: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === MovieActionTypes.MOVIE_POPULAR_REQUEST_SUCCESS,
    () => ({
      ...state,
      movieUpcomingResults: action.movieUpcomingResults,
      movieUpcomingCurrentPage: action.movieUpcomingCurrentPage,
      movieUpcomingTotalPages: action.movieUpcomingTotalPages,
      movieUpcomingTotalResults: action.movieUpcomingTotalResults,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === MovieActionTypes.MOVIE_POPULAR_REQUEST_FAILURE,
    () => ({
      ...state,
      movieUpcomingResults: null,
      movieUpcomingCurrentPage: null,
      movieUpcomingTotalPages: null,
      movieUpcomingTotalResults: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default MovieUpcomingReducer;
