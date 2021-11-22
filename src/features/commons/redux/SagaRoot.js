import { all } from 'redux-saga/effects';
import AccountServicesRoot from '../../account/services/AccountServicesRoot';
import LoginServicesRoot from '../../login/services/LoginServicesRoot';
import MovieServicesRoot from '../../movie/services/MovieServicesRoot';
import PersonServicesRoot from '../../person/services/PersonServicesRoot';
import SearchServicesRoot from '../../search/services/SearchServicesRoot';
import TvServicesRoot from '../../tv/services/TvServicesRoot';

// add here all your saga service root
export default function* rootSaga() {
  yield all([
    ...AccountServicesRoot,
    ...LoginServicesRoot,
    ...MovieServicesRoot,
    ...PersonServicesRoot,
    ...SearchServicesRoot,
    ...TvServicesRoot,
  ]);
}
