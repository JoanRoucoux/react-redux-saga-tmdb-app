import { call, put } from 'redux-saga/effects';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import { LoginActionTypes } from '../redux';
import LoginServicesConstants from './LoginServicesConstants';
import LoginApi from './LoginApi';

const {
  LOGIN_DELETE_SESSION_REQUEST_SUCCESS,
  LOGIN_DELETE_SESSION_REQUEST_FAILURE,
} = LoginActionTypes;

const {
  DELETE_SESSION_SERVICE_PATH,
} = LoginServicesConstants;

const {
  loginDeleteSessionQuery,
} = LoginApi;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getLoginDeleteSession(action) {
  try {
    // execute query
    const response = yield call(loginDeleteSessionQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);

    if (error) {
      // dispatch a failure action
      // to the store with the error
      console.log('[LoginDeleteSessionService] Service call '
          + `${DELETE_SESSION_SERVICE_PATH} KO`, error);
      yield put({
        type: LOGIN_DELETE_SESSION_REQUEST_FAILURE,
        error,
      });
    } else if (data?.success) {
      console.log('[LoginDeleteSessionService] Service call '
      + `${DELETE_SESSION_SERVICE_PATH} OK`, data);

      // dispatch a success action
      yield put({
        type: LOGIN_DELETE_SESSION_REQUEST_SUCCESS,
      });
    } else {
      // dispatch a failure action
      // to the store with the error
      console.log('[LoginDeleteSessionService] Service call '
          + `${DELETE_SESSION_SERVICE_PATH} OK, but delete sessionId error`);
      yield put({
        type: LOGIN_DELETE_SESSION_REQUEST_FAILURE,
        error: 'err_default',
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    console.log('[LoginDeleteSessionService] Service call '
          + `${DELETE_SESSION_SERVICE_PATH} KO`, error);
    yield put({
      type: LOGIN_DELETE_SESSION_REQUEST_FAILURE,
      error,
    });
  }
}
