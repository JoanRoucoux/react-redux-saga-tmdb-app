import { Matcher } from '../../../core';
import LoginActionTypes from './LoginActionTypes';

const initialState = {
  isLoggedIn: false,
  sessionId: null,
  loading: false,
  error: null,
};

const LoginNewSessionReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === LoginActionTypes.LOGIN_NEW_SESSION_REQUEST,
    () => ({
      ...state,
      isLoggedIn: false,
      sessionId: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === LoginActionTypes.LOGIN_NEW_SESSION_REQUEST_SUCCESS,
    () => ({
      ...state,
      isLoggedIn: true,
      sessionId: action.sessionId,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === LoginActionTypes.LOGIN_NEW_SESSION_REQUEST_FAILURE,
    () => ({
      ...state,
      isLoggedIn: false,
      sessionId: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default LoginNewSessionReducer;
