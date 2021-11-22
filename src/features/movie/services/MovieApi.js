import { axios } from '../../../core';
import MovieServicesConstants from './MovieServicesConstants';

const {
  getMovieDetailsServicePath,
  GET_MOVIE_NOW_PLAYING_SERVICE_PATH,
  GET_MOVIE_POPULAR_SERVICE_PATH,
  GET_MOVIE_TOP_RATED_SERVICE_PATH,
  GET_MOVIE_UPCOMING_SERVICE_PATH,
} = MovieServicesConstants;

const movieDetailsQuery = async (params) => {
  const {
    movieId,
  } = params;
  const url = getMovieDetailsServicePath(movieId);
  return axios({
    method: 'get',
    url,
  });
};

const movieNowPlayingQuery = async (params) => {
  const url = `${GET_MOVIE_NOW_PLAYING_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params,
  });
};

const moviePopularQuery = async (params) => {
  const url = `${GET_MOVIE_POPULAR_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params,
  });
};

const movieTopRatedQuery = async (params) => {
  const url = `${GET_MOVIE_TOP_RATED_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params,
  });
};

const movieUpcomingQuery = async (params) => {
  const url = `${GET_MOVIE_UPCOMING_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params,
  });
};

const MovieApi = {
  movieDetailsQuery,
  movieNowPlayingQuery,
  moviePopularQuery,
  movieTopRatedQuery,
  movieUpcomingQuery,
};

export default MovieApi;
