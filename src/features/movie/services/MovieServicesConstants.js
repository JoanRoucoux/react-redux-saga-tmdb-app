const getMovieDetailsServicePath = (movieId) => `/movie/${movieId}`;
const GET_MOVIE_NOW_PLAYING_SERVICE_PATH = '/movie/now_playing';
const GET_MOVIE_POPULAR_SERVICE_PATH = '/movie/popular';
const GET_MOVIE_TOP_RATED_SERVICE_PATH = '/movie/top_rated';
const GET_MOVIE_UPCOMING_SERVICE_PATH = '/movie/upcoming';

const MovieServicesConstants = {
  getMovieDetailsServicePath,
  GET_MOVIE_NOW_PLAYING_SERVICE_PATH,
  GET_MOVIE_POPULAR_SERVICE_PATH,
  GET_MOVIE_TOP_RATED_SERVICE_PATH,
  GET_MOVIE_UPCOMING_SERVICE_PATH,
};

export default MovieServicesConstants;
