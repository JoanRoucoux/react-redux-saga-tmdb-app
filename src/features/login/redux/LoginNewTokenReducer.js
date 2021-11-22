import { Matcher } from '../../../core';
import LoginActionTypes from './LoginActionTypes';

const initialState = {
  requestToken: null,
  loading: false,
  error: null,
};

const LoginNewTokenReducer = (state = initialState, action) => Matcher()
  .on(
    () => action.type === LoginActionTypes.LOGIN_NEW_TOKEN_REQUEST,
    () => ({
      ...state,
      requestToken: null,
      loading: true,
      error: null,
    }),
  )
  .on(
    () => action.type === LoginActionTypes.LOGIN_NEW_TOKEN_REQUEST_SUCCESS,
    () => ({
      ...state,
      requestToken: action.requestToken,
      loading: false,
      error: null,
    }),
  )
  .on(
    () => action.type === LoginActionTypes.LOGIN_NEW_TOKEN_REQUEST_FAILURE,
    () => ({
      ...state,
      requestToken: null,
      loading: false,
      error: action.error,
    }),
  )
  .otherwise(() => state);

export default LoginNewTokenReducer;
