const GET_ACCOUNT_DETAILS_SERVICE_PATH = '/account';
const getAccountFavoriteMoviesServicePath = (accountId) => `/account/${accountId}/favorite/movies`;
const getAccountFavoriteTvServicePath = (accountId) => `/account/${accountId}/favorite/tv`;
const getAccountWatchlistMoviesServicePath = (accountId) => `/account/${accountId}/watchlist/movies`;
const getAccountWatchlistTvServicePath = (accountId) => `/account/${accountId}/watchlist/tv`;
const postAccountFavoriteServicePath = (accountId) => `/account/${accountId}/favorite`;
const postAccountWatchlistServicePath = (accountId) => `/account/${accountId}/watchlist`;

const AccountServicesConstants = {
  GET_ACCOUNT_DETAILS_SERVICE_PATH,
  getAccountFavoriteMoviesServicePath,
  getAccountFavoriteTvServicePath,
  getAccountWatchlistMoviesServicePath,
  getAccountWatchlistTvServicePath,
  postAccountFavoriteServicePath,
  postAccountWatchlistServicePath,
};

export default AccountServicesConstants;
