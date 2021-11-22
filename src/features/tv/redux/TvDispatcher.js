import TvActionTypes from './TvActionTypes';

const {
  TV_AIRING_TODAY_REQUEST,
  TV_DETAILS_REQUEST,
  TV_ON_THE_AIR_REQUEST,
  TV_POPULAR_REQUEST,
  TV_TOP_RATED_REQUEST,
} = TvActionTypes;

const TvDispatcher = {
  requestTvAiringToday: (data) => ({
    type: TV_AIRING_TODAY_REQUEST,
    payload: data,
  }),

  requestTvDetails: (data) => ({
    type: TV_DETAILS_REQUEST,
    payload: data,
  }),

  requestTvOnTheAir: (data) => ({
    type: TV_ON_THE_AIR_REQUEST,
    payload: data,
  }),

  requestTvPopular: (data) => ({
    type: TV_POPULAR_REQUEST,
    payload: data,
  }),

  requestTvTopRated: (data) => ({
    type: TV_TOP_RATED_REQUEST,
    payload: data,
  }),
};

export default TvDispatcher;
