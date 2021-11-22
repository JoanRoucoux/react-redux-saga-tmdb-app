import { AccountDetailsReducer } from '../../account/redux';
import {
  LoginNewTokenReducer,
  LoginNewSessionReducer,
  LoginDeleteSessionReducer,
} from '../../login/redux';
import {
  MovieDetailsReducer,
  MovieNowPlayingReducer,
  MoviePopularReducer,
  MovieTopRatedReducer,
  MovieUpcomingReducer,
} from '../../movie/redux';
import {
  PersonDetailsReducer,
  PersonPopularReducer,
} from '../../person/redux';
import { SearchMultiReducer } from '../../search/redux';
import { ThemeModeReducer } from '../theme';
import {
  TvAiringTodayReducer,
  TvDetailsReducer,
  TvOnTheAirReducer,
  TvPopularReducer,
  TvTopRatedReducer,
} from '../../tv/redux';

const ReducerRoot = {
  // ACCOUNT
  AccountDetails: AccountDetailsReducer,

  // LOGIN
  LoginNewToken: LoginNewTokenReducer,
  LoginNewSession: LoginNewSessionReducer,
  LoginDeleteSession: LoginDeleteSessionReducer,

  // MOVIE
  MovieDetails: MovieDetailsReducer,
  MovieNowPlaying: MovieNowPlayingReducer,
  MoviePopular: MoviePopularReducer,
  MovieTopRated: MovieTopRatedReducer,
  MovieUpcoming: MovieUpcomingReducer,

  // PERSON
  PersonDetails: PersonDetailsReducer,
  PersonPopular: PersonPopularReducer,

  // SEARCH
  SearchMulti: SearchMultiReducer,

  // THEME
  ThemeMode: ThemeModeReducer,

  // TV
  TvAiringToday: TvAiringTodayReducer,
  TvDetails: TvDetailsReducer,
  TvOnTheAir: TvOnTheAirReducer,
  TvPopular: TvPopularReducer,
  TvTopRated: TvTopRatedReducer,
};

export default ReducerRoot;
