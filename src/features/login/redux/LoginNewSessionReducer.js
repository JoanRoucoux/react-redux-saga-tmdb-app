import { Matcher } from '../../../core';
import LoginActionTypes from './LoginActionTypes';

const initialState = {
  sessionId: null,
  loading: false,
  error: null,
};

const LoginNewSessionReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === LoginActionTypes.LOGIN_NEW_SESSION_REQUEST,
    () => ({
      ...state,
      sessionId: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === LoginActionTypes.LOGIN_NEW_SESSION_REQUEST_SUCCESS,
    () => ({
      ...state,
      sessionId: action.sessionId,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === LoginActionTypes.LOGIN_NEW_SESSION_REQUEST_FAILURE,
    () => ({
      ...state,
      sessionId: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default LoginNewSessionReducer;
