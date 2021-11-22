import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {
  FullLayout,
  MainLayout,
} from './features/commons/components';
import LazyRoutes from './LazyRoutes';

const {
  AccountDetailsPage,
  AccountFavoritesPage,
  AboutPage,
  HomePage,
  LoginPage,
  LoginApprovedPage,
  MovieDetailsPage,
  MovieNowPlayingPage,
  MoviePopularPage,
  MovieTopRatedPage,
  MovieUpcomingPage,
  NotFoundPage,
  PersonDetailsPage,
  PersonPopularPage,
  SearchMultiPage,
  TvAiringTodayPage,
  TvDetailsPage,
  TvOnTheAirPage,
  TvPopularPage,
  TvTopRatedPage,
} = LazyRoutes;

const routes = (isLoggedIn) => [
  {
    path: 'app',
    element: <MainLayout />,
    children: [
      { path: 'about', element: <AboutPage /> },
      { path: 'home', element: <HomePage /> },
      {
        path: 'account',
        element: isLoggedIn ? <Outlet /> : <Navigate to="/login" />,
        children: [
          { path: 'details', element: <AccountDetailsPage /> },
          { path: 'favorites', element: <AccountFavoritesPage /> },
          { path: '/', element: <Navigate to="details" /> },
          { path: '*', element: <Navigate to="/app/404" /> },
        ],
      },
      {
        path: 'movie',
        element: <Outlet />,
        children: [
          { path: 'popular', element: <MoviePopularPage /> },
          { path: 'now-playing', element: <MovieNowPlayingPage /> },
          { path: 'upcoming', element: <MovieUpcomingPage /> },
          { path: 'top-rated', element: <MovieTopRatedPage /> },
          { path: ':id', element: <MovieDetailsPage /> },
          { path: '/', element: <Navigate to="popular" /> },
          { path: '*', element: <Navigate to="/app/404" /> },
        ],
      },
      {
        path: 'person',
        element: <Outlet />,
        children: [
          { path: 'popular/1', element: <Navigate to="popular" /> },
          { path: 'popular/:pageNumber', element: <PersonPopularPage /> },
          { path: 'popular', element: <PersonPopularPage /> },
          { path: ':id', element: <PersonDetailsPage /> },
          { path: '/', element: <Navigate to="popular" /> },
          { path: '*', element: <Navigate to="/app/404" /> },
        ],
      },
      { path: 'search', element: <SearchMultiPage /> },
      {
        path: 'tv',
        element: <Outlet />,
        children: [
          { path: 'popular', element: <TvPopularPage /> },
          { path: 'airing-today', element: <TvAiringTodayPage /> },
          { path: 'on-the-air', element: <TvOnTheAirPage /> },
          { path: 'top-rated', element: <TvTopRatedPage /> },
          { path: ':id', element: <TvDetailsPage /> },
          { path: '/', element: <Navigate to="popular" /> },
          { path: '*', element: <Navigate to="/app/404" /> },
        ],
      },
      { path: '404', element: <NotFoundPage /> },
      { path: '/', element: <Navigate to="home" /> },
      { path: '*', element: <Navigate to="404" /> },
    ],
  },
  {
    path: '/',
    element: <FullLayout />,
    children: [
      {
        path: 'login',
        element: !isLoggedIn ? <LoginPage /> : <Navigate to="/app/home" />,
      },
      {
        path: 'login/approved',
        element: <LoginApprovedPage />,
      },
      { path: '/', element: <Navigate to="/app/home" /> },
      { path: '*', element: <Navigate to="/app/404" /> },
    ],
  },
];

export default routes;
