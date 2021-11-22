import { takeEvery } from 'redux-saga/effects';
import { TvActionTypes } from '../redux';
import TvAiringTodayService from './TvAiringTodayService';
import TvDetailsService from './TvDetailsService';
import TvOnTheAirService from './TvOnTheAirService';
import TvPopularService from './TvPopularService';
import TvTopRatedService from './TvTopRatedService';

const TvServicesRoot = [
  takeEvery(TvActionTypes.TV_AIRING_TODAY_REQUEST, TvAiringTodayService),
  takeEvery(TvActionTypes.TV_DETAILS_REQUEST, TvDetailsService),
  takeEvery(TvActionTypes.TV_ON_THE_AIR_REQUEST, TvOnTheAirService),
  takeEvery(TvActionTypes.TV_POPULAR_REQUEST, TvPopularService),
  takeEvery(TvActionTypes.TV_TOP_RATED_REQUEST, TvTopRatedService),
];

export default TvServicesRoot;
