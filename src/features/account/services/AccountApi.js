import { axios } from '../../../core';
import AccountServicesConstants from './AccountServicesConstants';

const {
  GET_ACCOUNT_DETAILS_SERVICE_PATH,
  getAccountFavoriteMoviesServicePath,
  getAccountFavoriteTvServicePath,
  getAccountWatchlistMoviesServicePath,
  getAccountWatchlistTvServicePath,
} = AccountServicesConstants;

const accountDetailsQuery = async (params) => {
  const {
    sessionId,
  } = params;
  const url = `${GET_ACCOUNT_DETAILS_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params: {
      session_id: sessionId,
    },
  });
};

const accountFavoriteMoviesQuery = async (params) => {
  const {
    accountId,
    sessionId,
  } = params;
  const url = getAccountFavoriteMoviesServicePath(accountId);
  return axios({
    method: 'get',
    url,
    params: {
      session_id: sessionId,
    },
  });
};

const accountFavoriteTvQuery = async (params) => {
  const {
    accountId,
    sessionId,
  } = params;
  const url = getAccountFavoriteTvServicePath(accountId);
  return axios({
    method: 'get',
    url,
    params: {
      session_id: sessionId,
    },
  });
};

const accountWatchlistMoviesQuery = async (params) => {
  const {
    accountId,
    sessionId,
  } = params;
  const url = getAccountWatchlistMoviesServicePath(accountId);
  return axios({
    method: 'get',
    url,
    params: {
      session_id: sessionId,
    },
  });
};

const accountWatchlistTvQuery = async (params) => {
  const {
    accountId,
    sessionId,
  } = params;
  const url = getAccountWatchlistTvServicePath(accountId);
  return axios({
    method: 'get',
    url,
    params: {
      session_id: sessionId,
    },
  });
};

const AccountApi = {
  accountDetailsQuery,
  accountFavoriteMoviesQuery,
  accountFavoriteTvQuery,
  accountWatchlistMoviesQuery,
  accountWatchlistTvQuery,
};

export default AccountApi;
