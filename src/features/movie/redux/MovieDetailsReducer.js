import { Matcher } from '../../../core';
import MovieActionTypes from './MovieActionTypes';

const initialState = {
  movieDetails: null,
  loading: false,
  error: null,
};

const MovieDetailsReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === MovieActionTypes.MOVIE_DETAILS_REQUEST,
    () => ({
      ...state,
      movieDetails: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === MovieActionTypes.MOVIE_DETAILS_REQUEST_SUCCESS,
    () => ({
      ...state,
      movieDetails: action.movieDetails,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === MovieActionTypes.MOVIE_DETAILS_REQUEST_FAILURE,
    () => ({
      ...state,
      movieDetails: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default MovieDetailsReducer;
