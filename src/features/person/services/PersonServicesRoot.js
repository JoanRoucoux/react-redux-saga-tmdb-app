import { takeEvery } from 'redux-saga/effects';
import { PersonActionTypes } from '../redux';
import PersonCombinedCreditsService from './PersonCombinedCreditsService';
import PersonDetailsService from './PersonDetailsService';
import PersonPopularService from './PersonPopularService';

const PersonServicesRoot = [
  takeEvery(PersonActionTypes.PERSON_COMBINED_CREDITS_REQUEST, PersonCombinedCreditsService),
  takeEvery(PersonActionTypes.PERSON_DETAILS_REQUEST, PersonDetailsService),
  takeEvery(PersonActionTypes.PERSON_POPULAR_REQUEST, PersonPopularService),
];

export default PersonServicesRoot;
