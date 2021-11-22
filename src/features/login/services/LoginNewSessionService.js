import { call, put } from 'redux-saga/effects';
import { AppLogger } from '../../../core';
import MovieDbApiServicesFormatter from '../../commons/services-utils/MovieDbApiServicesFormatter';
import SessionUtils from '../../commons/utils/SessionUtils';
import { LoginActionTypes } from '../redux';
import LoginServicesConstants from './LoginServicesConstants';
import LoginApi from './LoginApi';

// service status
const {
  LOGIN_NEW_SESSION_REQUEST_SUCCESS,
  LOGIN_NEW_SESSION_REQUEST_FAILURE,
} = LoginActionTypes;

const {
  POST_SESSION_SERVICE_PATH,
} = LoginServicesConstants;

const {
  loginCreateSessionQuery,
} = LoginApi;

const {
  saveSessionId,
} = SessionUtils;

// Worker saga: makes the api call
// when saga watcher sees the action
export default function* getLoginNewSession(action) {
  try {
    // execute query
    const response = yield call(loginCreateSessionQuery, action.payload);

    // parse response
    const {
      data,
      error,
    } = MovieDbApiServicesFormatter(response);

    if (error) {
      // dispatch a failure action
      // to the store with the error
      AppLogger.error('[LoginNewSessionService] Service call '
          + `${POST_SESSION_SERVICE_PATH} KO`, error);
      yield put({
        type: LOGIN_NEW_SESSION_REQUEST_FAILURE,
        error,
      });
    } else {
      // dispatch a success action
      // to the store with the data
      console.log('[LoginNewSessionService] Service call '
          + `${POST_SESSION_SERVICE_PATH} OK`, data);

      // add sessionId to localStorage
      saveSessionId(data?.session_id);

      yield put({
        type: LOGIN_NEW_SESSION_REQUEST_SUCCESS,
        sessionId: data?.session_id,
      });
    }
  } catch (error) {
    // dispatch a failure action
    // to the store with the error
    AppLogger.error('[LoginNewSessionService] Service call '
          + `${POST_SESSION_SERVICE_PATH} KO`, error);
    yield put({
      type: LOGIN_NEW_SESSION_REQUEST_FAILURE,
      error,
    });
  }
}
