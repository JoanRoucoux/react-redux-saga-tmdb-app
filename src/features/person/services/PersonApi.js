import { axios } from '../../../core';
import PersonServicesConstants from './PersonServicesConstants';

// service path
const {
  getPersonCombinedCreditsServicePath,
  getPersonDetailsServicePath,
  GET_PERSON_POPULAR_SERVICE_PATH,
} = PersonServicesConstants;

const personCombinedCreditsQuery = async (params) => {
  const {
    personId,
  } = params;
  const url = getPersonCombinedCreditsServicePath(personId);
  return axios({
    method: 'get',
    url,
  });
};

const personDetailsQuery = async (params) => {
  const {
    personId,
  } = params;
  const url = getPersonDetailsServicePath(personId);
  return axios({
    method: 'get',
    url,
  });
};

const personPopularQuery = async (params) => {
  const {
    pageNumber,
  } = params;
  const url = `${GET_PERSON_POPULAR_SERVICE_PATH}`;
  return axios({
    method: 'get',
    url,
    params: {
      page: pageNumber,
    },
  });
};

const PersonApi = {
  personCombinedCreditsQuery,
  personDetailsQuery,
  personPopularQuery,
};

export default PersonApi;
