import React, { Component } from 'react';
import { Reduxify } from '../../../core';
import {
  withRouter,
  withTitle,
} from '../../commons';
import {
  ApiError,
  Header,
} from '../../commons/components';
import {
  PersonProvider,
  PersonDispatcher,
} from '../redux';
import PersonPopularList from '../components/PersonPopularList';
import PaginationView from '../components/PaginationView';

const {
  PersonPopularFragment,
} = PersonProvider;

@withRouter
@withTitle('Popular People')
@Reduxify((state) => ({
  // define state to extract
  ...PersonPopularFragment(state),
}), {
  // define actions to execute
  ...PersonDispatcher,
})
class PersonPopularPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.fetchPersonPopular();
  }

  componentDidUpdate(prevProps) {
    const {
      searchParams: prevSearchParams,
    } = prevProps;
    const {
      searchParams,
    } = this.props;
    if (searchParams.get('page') !== prevSearchParams.get('page')) {
      this.fetchPersonPopular();
    }
  }

  fetchPersonPopular = () => {
    const {
      searchParams,
      requestPersonPopular,
    } = this.props;
    const qsPage = searchParams.get('page');
    const pageNumber = qsPage ? parseInt(qsPage, 10) : 1;
    requestPersonPopular({ pageNumber });
  };

  render() {
    const {
      personPopularResults,
      personPopularCurrentPage,
      personPopularTotalPages,
      personPopularTotalResults,
      personPopularLoading,
      personPopularError,
    } = this.props;

    console.log('[PersonPopularPage] Display props:', {
      personPopularResults,
      personPopularCurrentPage,
      personPopularTotalPages,
      personPopularTotalResults,
      personPopularLoading,
      personPopularError,
    });

    return (
      <>
        <Header title="Popular People" />
        {(personPopularError && (
          <ApiError />
        )) || (
          <>
            <PersonPopularList
              currentPage={personPopularCurrentPage}
              loading={personPopularLoading}
              results={personPopularResults}
              totalPages={personPopularTotalPages}
            />
            <PaginationView
              currentPage={personPopularCurrentPage}
              link="/app/person/popular"
              totalPages={personPopularTotalPages}
            />
          </>
        )}
      </>
    );
  }
}

export default PersonPopularPage;
