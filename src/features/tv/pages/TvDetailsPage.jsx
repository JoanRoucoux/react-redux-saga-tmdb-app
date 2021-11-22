import React, { Component } from 'react';
import { Reduxify } from '../../../core';
import {
  withRouter,
  withTitle,
} from '../../commons';
import { ApiError } from '../../commons/components';
import {
  TvProvider,
  TvDispatcher,
} from '../redux';

const {
  TvDetailsFragment,
} = TvProvider;

@withRouter
@withTitle('Tv details')
@Reduxify((state) => ({
  // define state to extract
  ...TvDetailsFragment(state),
}), {
  // define actions to execute
  ...TvDispatcher,
})
class TvDetailsPage extends Component {
  // propsType (validation)
  static propTypes = {};

  // default props
  static defaultProps = {};

  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {
    const {
      params,
      requestTvDetails,
    } = this.props;
    const {
      id: tvId,
    } = params;
    requestTvDetails({ tvId });
  };

  render() {
    const {
      tvDetails,
      tvDetailsLoading,
      tvDetailsError,
    } = this.props;

    console.log('[TvDetailsPage] Display props:', {
      tvDetails,
      tvDetailsLoading,
      tvDetailsError,
    });

    return (
      <>
        {(tvDetailsError && (
          <ApiError />
        ))
        || (
          <p>
            Je suis TvDetailsPage
          </p>
        )}
      </>
    );
  }
}

export default TvDetailsPage;
