import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { LoginActionTypes } from '../redux';
import LoginServicesConstants from './LoginServicesConstants';
import LoginApi from './LoginApi';

// service status
const {
  LOGIN_NEW_TOKEN_REQUEST_SUCCESS,
  LOGIN_NEW_TOKEN_REQUEST_FAILURE,
} = LoginActionTypes;

const {
  GET_REQUEST_TOKEN_SERVICE_PATH,
} = LoginServicesConstants;

const {
  loginCreateRequestTokenQuery,
} = LoginApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getLoginNewToken() {
  try {
    // execute query
    const response = yield call(loginCreateRequestTokenQuery);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);

    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[LoginNewTokenService] Service call '
          + `${GET_REQUEST_TOKEN_SERVICE_PATH} KO`, error);
      yield put({
        type: LOGIN_NEW_TOKEN_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[LoginNewTokenService] Service call '
          + `${GET_REQUEST_TOKEN_SERVICE_PATH} OK`, data);
      yield put({
        type: LOGIN_NEW_TOKEN_REQUEST_SUCCESS,
        requestToken: data?.request_token,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[LoginNewTokenService] Service call '
          + `${GET_REQUEST_TOKEN_SERVICE_PATH} KO`, error);
    yield put({
      type: LOGIN_NEW_TOKEN_REQUEST_FAILURE,
      error,
    });
  }
}
