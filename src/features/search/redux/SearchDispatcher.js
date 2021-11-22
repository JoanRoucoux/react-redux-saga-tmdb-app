import SearchActionTypes from './SearchActionTypes';

const {
  SEARCH_MULTI_REQUEST,
} = SearchActionTypes;

const SearchDispatcher = {
  requestSearchMulti: (data) => ({
    type: SEARCH_MULTI_REQUEST,
    payload: data,
  }),
};

export default SearchDispatcher;
