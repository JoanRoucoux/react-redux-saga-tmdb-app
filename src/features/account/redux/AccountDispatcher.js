import AccountActionTypes from './AccountActionTypes';

const {
  ACCOUNT_DETAILS_REQUEST,
  ACCOUNT_FAVORITE_MOVIES_REQUEST,
  ACCOUNT_FAVORITE_TV_REQUEST,
  ACCOUNT_WATCHLIST_MOVIES_REQUEST,
  ACCOUNT_WATCHLIST_TV_REQUEST,
} = AccountActionTypes;

const AccountDispatcher = {
  requestAccountDetails: (data) => ({
    type: ACCOUNT_DETAILS_REQUEST,
    payload: data,
  }),
  requestAccountFavoriteMovies: (data) => ({
    type: ACCOUNT_FAVORITE_MOVIES_REQUEST,
    payload: data,
  }),
  requestAccountFavoriteTv: (data) => ({
    type: ACCOUNT_FAVORITE_TV_REQUEST,
    payload: data,
  }),
  requestAccountWatchlistMovies: (data) => ({
    type: ACCOUNT_WATCHLIST_MOVIES_REQUEST,
    payload: data,
  }),
  requestAccountWatchlistTv: (data) => ({
    type: ACCOUNT_WATCHLIST_TV_REQUEST,
    payload: data,
  }),
};

export default AccountDispatcher;
