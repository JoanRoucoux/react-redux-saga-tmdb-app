import { Matcher } from '../../../core';
import MovieActionTypes from './MovieActionTypes';

const initialState = {
  movieTopRatedResults: null,
  movieTopRatedCurrentPage: null,
  movieTopRatedTotalPages: null,
  movieTopRatedTotalResults: null,
  loading: false,
  error: null,
};

const MovieTopRatedReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === MovieActionTypes.MOVIE_TOP_RATED_REQUEST,
    () => ({
      ...state,
      movieTopRatedResults: null,
      movieTopRatedCurrentPage: null,
      movieTopRatedTotalPages: null,
      movieTopRatedTotalResults: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === MovieActionTypes.MOVIE_TOP_RATED_REQUEST_SUCCESS,
    () => ({
      ...state,
      movieTopRatedResults: action.movieTopRatedResults,
      movieTopRatedCurrentPage: action.movieTopRatedCurrentPage,
      movieTopRatedTotalPages: action.movieTopRatedTotalPages,
      movieTopRatedTotalResults: action.movieTopRatedTotalResults,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === MovieActionTypes.MOVIE_TOP_RATED_REQUEST_FAILURE,
    () => ({
      ...state,
      movieTopRatedResults: null,
      movieTopRatedCurrentPage: null,
      movieTopRatedTotalPages: null,
      movieTopRatedTotalResults: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default MovieTopRatedReducer;
