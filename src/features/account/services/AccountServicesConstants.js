const GET_ACCOUNT_DETAILS_SERVICE_PATH = '/account';
const getAccountFavoriteMoviesServicePath = (accountId) => `/account/${accountId}/favorite/movies`;
const getAccountFavoriteTvServicePath = (accountId) => `/account/${accountId}/favorite/tv`;
const getAccountWatchlistMoviesServicePath = (accountId) => `/account/${accountId}/watchlist/movies`;
const getAccountWatchlistTvServicePath = (accountId) => `/account/${accountId}/watchlist/tv`;

const AccountServicesConstants = {
  GET_ACCOUNT_DETAILS_SERVICE_PATH,
  getAccountFavoriteMoviesServicePath,
  getAccountFavoriteTvServicePath,
  getAccountWatchlistMoviesServicePath,
  getAccountWatchlistTvServicePath,
};

export default AccountServicesConstants;
