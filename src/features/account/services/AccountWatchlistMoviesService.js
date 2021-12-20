import { call, put } from 'redux-saga/effects';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { AccountActionTypes } from '../redux';
import AccountServicesConstants from './AccountServicesConstants';
import AccountApi from './AccountApi';

// service status
const {
  ACCOUNT_WATCHLIST_MOVIES_REQUEST_SUCCESS,
  ACCOUNT_WATCHLIST_MOVIES_REQUEST_FAILURE,
} = AccountActionTypes;

const {
  GET_ACCOUNT_DETAILS_SERVICE_PATH,
} = AccountServicesConstants;

const {
  accountWatchlistMoviesQuery,
} = AccountApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getAccountWatchlistMovies(action) {
  try {
    // execute query
    const response = yield call(accountWatchlistMoviesQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);

    if (error) {
      // dispatch a failure action
      // to the store with the error
      console.log('[AccountWatchlistMoviesService] Service call '
          + `${GET_ACCOUNT_DETAILS_SERVICE_PATH} KO`, error);
      yield put({
        type: ACCOUNT_WATCHLIST_MOVIES_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[AccountWatchlistMoviesService] Service call '
          + `${GET_ACCOUNT_DETAILS_SERVICE_PATH} OK`, data);
      yield put({
        type: ACCOUNT_WATCHLIST_MOVIES_REQUEST_SUCCESS,
        accountDetails: data,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    console.log('[AccountWatchlistMoviesService] Service call '
          + `${GET_ACCOUNT_DETAILS_SERVICE_PATH} KO`, error);
    yield put({
      type: ACCOUNT_WATCHLIST_MOVIES_REQUEST_FAILURE,
      error,
    });
  }
}
