import { takeEvery } from 'redux-saga/effects';
import { MovieActionTypes } from '../redux';
import MovieDetailsService from './MovieDetailsService';
import MovieNowPlayingService from './MovieNowPlayingService';
import MoviePopularService from './MoviePopularService';
import MovieTopRatedService from './MovieTopRatedService';
import MovieUpcomingService from './MovieUpcomingService';

const MovieServicesRoot = [
  takeEvery(MovieActionTypes.MOVIE_DETAILS_REQUEST, MovieDetailsService),
  takeEvery(MovieActionTypes.MOVIE_NOW_PLAYING_REQUEST, MovieNowPlayingService),
  takeEvery(MovieActionTypes.MOVIE_POPULAR_REQUEST, MoviePopularService),
  takeEvery(MovieActionTypes.MOVIE_TOP_RATED_REQUEST, MovieTopRatedService),
  takeEvery(MovieActionTypes.MOVIE_UPCOMING_REQUEST, MovieUpcomingService),
];

export default MovieServicesRoot;
