import LoginActionTypes from './LoginActionTypes';

const {
  LOGIN_NEW_TOKEN_REQUEST,
  LOGIN_NEW_SESSION_REQUEST,
  LOGIN_DELETE_SESSION_REQUEST,
} = LoginActionTypes;

const LoginDispatcher = {
  requestLoginNewToken: (data) => ({
    type: LOGIN_NEW_TOKEN_REQUEST,
    payload: data,
  }),

  requestLoginNewSession: (data) => ({
    type: LOGIN_NEW_SESSION_REQUEST,
    payload: data,
  }),

  requestLoginDeleteSession: (data) => ({
    type: LOGIN_DELETE_SESSION_REQUEST,
    payload: data,
  }),
};

export default LoginDispatcher;
