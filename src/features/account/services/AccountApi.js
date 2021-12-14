import { axios } from '../../../core';
import AccountServicesConstants from './AccountServicesConstants';

const {
  GET_ACCOUNT_DETAILS_SERVICE_PATH,
} = AccountServicesConstants;

const accountDetailsQuery = async (params) => {
  const {
    sessionId,
  } = params;
  const url = `${GET_ACCOUNT_DETAILS_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params: {
      session_id: sessionId,
    },
  });
};

const AccountApi = {
  accountDetailsQuery,
};

export default AccountApi;
