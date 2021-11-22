import { axios } from '../../../core';
import TvServicesConstants from './TvServicesConstants';

const {
  getTvDetailsServicePath,
  GET_TV_AIRING_TODAY_SERVICE_PATH,
  GET_TV_ON_THE_AIR_SERVICE_PATH,
  GET_TV_POPULAR_SERVICE_PATH,
  GET_TV_TOP_RATED_SERVICE_PATH,
} = TvServicesConstants;

const tvDetailsQuery = async (params) => {
  const {
    tvId,
  } = params;
  const url = getTvDetailsServicePath(tvId);
  return axios({
    method: 'get',
    url,
  });
};

const tvAiringTodayQuery = async (params) => {
  const url = `${GET_TV_AIRING_TODAY_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params,
  });
};

const tvOnTheAirQuery = async (params) => {
  const url = `${GET_TV_ON_THE_AIR_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params,
  });
};

const tvPopularQuery = async (params) => {
  const url = `${GET_TV_POPULAR_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params,
  });
};

const tvTopRatedQuery = async (params) => {
  const url = `${GET_TV_TOP_RATED_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params,
  });
};

const TvApi = {
  tvDetailsQuery,
  tvAiringTodayQuery,
  tvOnTheAirQuery,
  tvPopularQuery,
  tvTopRatedQuery,
};

export default TvApi;
