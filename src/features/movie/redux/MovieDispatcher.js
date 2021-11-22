import MovieActionTypes from './MovieActionTypes';

const {
  MOVIE_DETAILS_REQUEST,
  MOVIE_NOW_PLAYING_REQUEST,
  MOVIE_POPULAR_REQUEST,
  MOVIE_TOP_RATED_REQUEST,
  MOVIE_UPCOMING_REQUEST,
} = MovieActionTypes;

const MovieDispatcher = {
  requestMovieDetails: (data) => ({
    type: MOVIE_DETAILS_REQUEST,
    payload: data,
  }),

  requestMovieNowPlaying: (data) => ({
    type: MOVIE_NOW_PLAYING_REQUEST,
    payload: data,
  }),

  requestMoviePopular: (data) => ({
    type: MOVIE_POPULAR_REQUEST,
    payload: data,
  }),

  requestMovieTopRated: (data) => ({
    type: MOVIE_TOP_RATED_REQUEST,
    payload: data,
  }),

  requestMovieUpcoming: (data) => ({
    type: MOVIE_UPCOMING_REQUEST,
    payload: data,
  }),
};

export default MovieDispatcher;
