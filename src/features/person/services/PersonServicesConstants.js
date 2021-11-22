const getPersonCombinedCreditsServicePath = (personId) => `/person/${personId}/combined_credits`;
const getPersonDetailsServicePath = (personId) => `/person/${personId}`;
const GET_PERSON_POPULAR_SERVICE_PATH = '/person/popular';

const PersonServicesConstants = {
  getPersonCombinedCreditsServicePath,
  getPersonDetailsServicePath,
  GET_PERSON_POPULAR_SERVICE_PATH,
};

export default PersonServicesConstants;
