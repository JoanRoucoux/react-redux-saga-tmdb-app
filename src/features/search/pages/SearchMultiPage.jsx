import React, { Component } from 'react';
import { Reduxify } from '../../../core';
import { withTitle } from '../../commons';
import { ApiError } from '../../commons/components';
import {
  SearchProvider,
  SearchDispatcher,
} from '../redux';

const {
  SearchMultiFragment,
} = SearchProvider;

@withTitle('Search')
@Reduxify((state) => ({
  // define state to extract
  ...SearchMultiFragment(state),
}), {
  // define actions to execute
  ...SearchDispatcher,
})
class SearchMultiPage extends Component {
  // initial state
  state = {};

  // did mount staff
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    const {
      searchMulti,
      searchMultiLoading,
      searchMultiError,
    } = this.props;

    console.log('[SearchMultiPage] Display props:', {
      searchMulti,
      searchMultiLoading,
      searchMultiError,
    });

    return (
      <>
        {(searchMultiError && (
          <ApiError />
        ))
        || (
          <p>
            SearchMultiPage
          </p>
        )}
      </>
    );
  }
}

export default SearchMultiPage;
