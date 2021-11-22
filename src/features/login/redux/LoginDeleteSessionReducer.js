import { Matcher } from '../../../core';
import LoginActionTypes from './LoginActionTypes';

const initialState = {
  loading: false,
  error: null,
};

const LoginDeleteSessionReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === LoginActionTypes.LOGIN_DELETE_SESSION_REQUEST,
    () => ({
      ...state,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === LoginActionTypes.LOGIN_DELETE_SESSION_REQUEST_SUCCESS,
    () => ({
      ...state,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === LoginActionTypes.LOGIN_DELETE_SESSION_REQUEST_FAILURE,
    () => ({
      ...state,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default LoginDeleteSessionReducer;
