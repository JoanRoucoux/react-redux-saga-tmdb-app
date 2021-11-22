import { axios } from '../../../core';
import SessionUtils from '../../commons/utils/SessionUtils';
import AccountServicesConstants from './AccountServicesConstants';

const {
  getAuthorizationHeader,
} = SessionUtils;

const {
  GET_ACCOUNT_DETAILS_SERVICE_PATH,
} = AccountServicesConstants;

const accountDetailsQuery = async () => {
  const url = `${GET_ACCOUNT_DETAILS_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    headers: getAuthorizationHeader,
  });
};

const AccountApi = {
  accountDetailsQuery,
};

export default AccountApi;
