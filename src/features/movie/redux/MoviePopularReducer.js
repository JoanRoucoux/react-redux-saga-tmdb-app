import { Matcher } from '../../../core';
import MovieActionTypes from './MovieActionTypes';

const initialState = {
  moviePopularResults: null,
  moviePopularCurrentPage: null,
  moviePopularTotalPages: null,
  moviePopularTotalResults: null,
  loading: false,
  error: null,
};

const MoviePopularReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === MovieActionTypes.MOVIE_POPULAR_REQUEST,
    () => ({
      ...state,
      moviePopularResults: null,
      moviePopularCurrentPage: null,
      moviePopularTotalPages: null,
      moviePopularTotalResults: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === MovieActionTypes.MOVIE_POPULAR_REQUEST_SUCCESS,
    () => ({
      ...state,
      moviePopularResults: action.moviePopularResults,
      moviePopularCurrentPage: action.moviePopularCurrentPage,
      moviePopularTotalPages: action.moviePopularTotalPages,
      moviePopularTotalResults: action.moviePopularTotalResults,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === MovieActionTypes.MOVIE_POPULAR_REQUEST_FAILURE,
    () => ({
      ...state,
      moviePopularResults: null,
      moviePopularCurrentPage: null,
      moviePopularTotalPages: null,
      moviePopularTotalResults: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default MoviePopularReducer;
