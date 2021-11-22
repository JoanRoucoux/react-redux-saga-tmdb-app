import { takeEvery } from 'redux-saga/effects';
import { LoginActionTypes } from '../redux';
import LoginNewTokenService from './LoginNewTokenService';
import LoginNewSessionService from './LoginNewSessionService';
import LoginDeleteSessionService from './LoginDeleteSessionService';

const LoginServicesRoot = [
  takeEvery(LoginActionTypes.LOGIN_NEW_TOKEN_REQUEST, LoginNewTokenService),
  takeEvery(LoginActionTypes.LOGIN_NEW_SESSION_REQUEST, LoginNewSessionService),
  takeEvery(LoginActionTypes.LOGIN_DELETE_SESSION_REQUEST, LoginDeleteSessionService),
];

export default LoginServicesRoot;
