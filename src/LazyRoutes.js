import { lazy } from 'react';

const AccountDetailsPage = lazy(() => import('./features/account/pages/AccountDetailsPage'));
const AccountFavoritesPage = lazy(() => import('./features/account/pages/AccountFavoritesPage'));
const AboutPage = lazy(() => import('./features/about/pages/AboutPage'));
const HomePage = lazy(() => import('./features/home/pages/HomePage'));
const LoginPage = lazy(() => import('./features/login/pages/LoginPage'));
const LoginApprovedPage = lazy(() => import('./features/login/pages/LoginApprovedPage'));
const MovieDetailsPage = lazy(() => import('./features/movie/pages/MovieDetailsPage'));
const MovieNowPlayingPage = lazy(() => import('./features/movie/pages/MovieNowPlayingPage'));
const MoviePopularPage = lazy(() => import('./features/movie/pages/MoviePopularPage'));
const MovieTopRatedPage = lazy(() => import('./features/movie/pages/MovieTopRatedPage'));
const MovieUpcomingPage = lazy(() => import('./features/movie/pages/MovieUpcomingPage'));
const NotFoundPage = lazy(() => import('./features/not-found/pages/NotFoundPage'));
const PersonDetailsPage = lazy(() => import('./features/person/pages/PersonDetailsPage'));
const PersonPopularPage = lazy(() => import('./features/person/pages/PersonPopularPage'));
const SearchMultiPage = lazy(() => import('./features/search/pages/SearchMultiPage'));
const TvAiringTodayPage = lazy(() => import('./features/tv/pages/TvAiringTodayPage'));
const TvDetailsPage = lazy(() => import('./features/tv/pages/TvDetailsPage'));
const TvOnTheAirPage = lazy(() => import('./features/tv/pages/TvOnTheAirPage'));
const TvPopularPage = lazy(() => import('./features/tv/pages/TvPopularPage'));
const TvTopRatedPage = lazy(() => import('./features/tv/pages/TvTopRatedPage'));

const LazyRoutes = {
  AccountDetailsPage,
  AccountFavoritesPage,
  AboutPage,
  HomePage,
  MovieDetailsPage,
  MovieNowPlayingPage,
  MoviePopularPage,
  MovieTopRatedPage,
  MovieUpcomingPage,
  LoginPage,
  LoginApprovedPage,
  NotFoundPage,
  PersonPopularPage,
  PersonDetailsPage,
  SearchMultiPage,
  TvAiringTodayPage,
  TvDetailsPage,
  TvOnTheAirPage,
  TvPopularPage,
  TvTopRatedPage,
};

export default LazyRoutes;
