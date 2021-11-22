import { Matcher } from '../../../core';
import MovieActionTypes from './MovieActionTypes';

const initialState = {
  movieNowPlayingResults: null,
  movieNowPlayingCurrentPage: null,
  movieNowPlayingTotalPages: null,
  movieNowPlayingTotalResults: null,
  loading: false,
  error: null,
};

const MovieNowPlayingReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === MovieActionTypes.MOVIE_POPULAR_REQUEST,
    () => ({
      ...state,
      movieNowPlayingResults: null,
      movieNowPlayingCurrentPage: null,
      movieNowPlayingTotalPages: null,
      movieNowPlayingTotalResults: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === MovieActionTypes.MOVIE_POPULAR_REQUEST_SUCCESS,
    () => ({
      ...state,
      movieNowPlayingResults: action.movieNowPlayingResults,
      movieNowPlayingCurrentPage: action.movieNowPlayingCurrentPage,
      movieNowPlayingTotalPages: action.movieNowPlayingTotalPages,
      movieNowPlayingTotalResults: action.movieNowPlayingTotalResults,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === MovieActionTypes.MOVIE_POPULAR_REQUEST_FAILURE,
    () => ({
      ...state,
      movieNowPlayingResults: null,
      movieNowPlayingCurrentPage: null,
      movieNowPlayingTotalPages: null,
      movieNowPlayingTotalResults: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default MovieNowPlayingReducer;
