import React, { Component } from 'react';
import { Reduxify } from '../../../core';
import {
  withCookies,
  withTitle,
} from '../../commons';
import {
  AccountDispatcher,
  AccountProvider,
} from '../redux';

const {
  AccountWatchlistMoviesFragment,
  AccountWatchlistTvFragment,
} = AccountProvider;

@withCookies
@withTitle('My Watchlist')
@Reduxify((state) => ({
  // define state to extract
  ...AccountWatchlistMoviesFragment(state),
  ...AccountWatchlistTvFragment(state),
}), {
  // define actions to execute
  ...AccountDispatcher,
})
class AccountWatchlistPage extends Component {
  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {
    const {
      cookies,
      requestAccountWatchlistMovies,
      requestAccountWatchlistTv,
    } = this.props;
    const { sessionId } = cookies;
    console.log('sessionId in AccountWatchlistPage', sessionId);
    requestAccountWatchlistMovies({ sessionId });
    requestAccountWatchlistTv({ sessionId });
  };

  render() {
    return (
      <p>Je suis AccountWatchlistPage</p>
    );
  }
}

export default AccountWatchlistPage;
