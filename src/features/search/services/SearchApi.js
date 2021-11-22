import { axios } from '../../../core';
import LoginServicesConstants from './SearchServicesConstants';

// service path
const {
  CREATE_REQUEST_TOKEN_SERVICE_PATH,
} = LoginServicesConstants;

const searchMultiQuery = async () => {
  const url = `${CREATE_REQUEST_TOKEN_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
  });
};

const SearchApi = {
  searchMultiQuery,
};

export default SearchApi;
