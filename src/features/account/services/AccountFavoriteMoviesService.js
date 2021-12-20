import { call, put } from 'redux-saga/effects';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { AccountActionTypes } from '../redux';
import AccountServicesConstants from './AccountServicesConstants';
import AccountApi from './AccountApi';

// service status
const {
  ACCOUNT_FAVORITE_MOVIES_REQUEST_SUCCESS,
  ACCOUNT_FAVORITE_MOVIES_REQUEST_FAILURE,
} = AccountActionTypes;

const {
  GET_ACCOUNT_DETAILS_SERVICE_PATH,
} = AccountServicesConstants;

const {
  accountFavoriteMoviesQuery,
} = AccountApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getAccountFavoriteMovies(action) {
  try {
    // execute query
    const response = yield call(accountFavoriteMoviesQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);

    if (error) {
      // dispatch a failure action
      // to the store with the error
      console.log('[AccountFavoriteMoviesService] Service call '
          + `${GET_ACCOUNT_DETAILS_SERVICE_PATH} KO`, error);
      yield put({
        type: ACCOUNT_FAVORITE_MOVIES_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[AccountFavoriteMoviesService] Service call '
          + `${GET_ACCOUNT_DETAILS_SERVICE_PATH} OK`, data);
      yield put({
        type: ACCOUNT_FAVORITE_MOVIES_REQUEST_SUCCESS,
        accountDetails: data,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    console.log('[AccountFavoriteMoviesService] Service call '
          + `${GET_ACCOUNT_DETAILS_SERVICE_PATH} KO`, error);
    yield put({
      type: ACCOUNT_FAVORITE_MOVIES_REQUEST_FAILURE,
      error,
    });
  }
}
