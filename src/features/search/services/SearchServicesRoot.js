import { takeEvery } from 'redux-saga/effects';
import { SearchActionTypes } from '../redux';
import SearchMultiService from './SearchMultiService';

const SearchServicesRoot = [
  takeEvery(SearchActionTypes.SEARCH_MULTI_REQUEST, SearchMultiService),
];

export default SearchServicesRoot;
