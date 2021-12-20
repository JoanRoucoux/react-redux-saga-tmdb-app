import { takeEvery } from 'redux-saga/effects';
import { AccountActionTypes } from '../redux';
import AccountDetailsService from './AccountDetailsService';
import AccountFavoriteMoviesService from './AccountFavoriteMoviesService';
import AccountFavoriteTvService from './AccountFavoriteTvService';
import AccountWatchlistMoviesService from './AccountWatchlistMoviesService';
import AccountWatchlistTvService from './AccountWatchlistTvService';
import AccountMarkFavoriteService from './AccountMarkFavoriteService';
import AccountAddWatchlistService from './AccountAddWatchlistService';

const AccountServicesRoot = [
  takeEvery(AccountActionTypes.ACCOUNT_DETAILS_REQUEST, AccountDetailsService),
  takeEvery(AccountActionTypes.ACCOUNT_FAVORITE_MOVIES_REQUEST, AccountFavoriteMoviesService),
  takeEvery(AccountActionTypes.ACCOUNT_FAVORITE_TV_REQUEST, AccountFavoriteTvService),
  takeEvery(AccountActionTypes.ACCOUNT_WATCHLIST_MOVIES_REQUEST, AccountWatchlistMoviesService),
  takeEvery(AccountActionTypes.ACCOUNT_WATCHLIST_TV_REQUEST, AccountWatchlistTvService),
  takeEvery(AccountActionTypes.ACCOUNT_MARK_FAVORITE_REQUEST, AccountMarkFavoriteService),
  takeEvery(AccountActionTypes.ACCOUNT_ADD_WATCHLIST_REQUEST, AccountAddWatchlistService),
];

export default AccountServicesRoot;
