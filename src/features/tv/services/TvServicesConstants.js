const getTvDetailsServicePath = (tvId) => `/tv/${tvId}`;
const GET_TV_AIRING_TODAY_SERVICE_PATH = '/tv/airing_today';
const GET_TV_ON_THE_AIR_SERVICE_PATH = '/tv/on_the_air';
const GET_TV_POPULAR_SERVICE_PATH = '/tv/popular';
const GET_TV_TOP_RATED_SERVICE_PATH = '/tv/top_rated';

const TvServicesConstants = {
  getTvDetailsServicePath,
  GET_TV_AIRING_TODAY_SERVICE_PATH,
  GET_TV_ON_THE_AIR_SERVICE_PATH,
  GET_TV_POPULAR_SERVICE_PATH,
  GET_TV_TOP_RATED_SERVICE_PATH,
};

export default TvServicesConstants;
