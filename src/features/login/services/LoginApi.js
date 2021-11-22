import { axios } from '../../../core';
import LoginServicesConstants from './LoginServicesConstants';

// service path
const {
  GET_REQUEST_TOKEN_SERVICE_PATH,
  POST_SESSION_SERVICE_PATH,
  DELETE_SESSION_SERVICE_PATH,
} = LoginServicesConstants;

const loginCreateRequestTokenQuery = async () => {
  const url = `${GET_REQUEST_TOKEN_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
  });
};

const loginCreateSessionQuery = async (params) => {
  const {
    requestToken,
  } = params;
  const url = `${POST_SESSION_SERVICE_PATH}`;
  return axios({
    method: 'post',
    url,
    data: {
      request_token: requestToken,
    },
  });
};

const loginDeleteSessionQuery = async (params) => {
  const {
    sessionId,
  } = params;
  const url = `${DELETE_SESSION_SERVICE_PATH}`;
  return axios({
    method: 'delete',
    url,
    data: {
      session_id: sessionId,
    },
  });
};

const LoginApi = {
  loginCreateRequestTokenQuery,
  loginCreateSessionQuery,
  loginDeleteSessionQuery,
};

export default LoginApi;
