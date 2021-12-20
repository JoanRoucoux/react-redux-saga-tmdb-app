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
  AccountFavoriteMoviesFragment,
  AccountFavoriteTvFragment,
} = AccountProvider;

@withCookies
@withTitle('My Favorites')
@Reduxify((state) => ({
  // define state to extract
  ...AccountFavoriteMoviesFragment(state),
  ...AccountFavoriteTvFragment(state),
}), {
  // define actions to execute
  ...AccountDispatcher,
})
class AccountFavoritesPage extends Component {
  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {
    const {
      cookies,
      requestAccountFavoriteMovies,
      requestAccountFavoriteTv,
    } = this.props;
    const { sessionId } = cookies;
    requestAccountFavoriteMovies({ sessionId });
    requestAccountFavoriteTv({ sessionId });
  };

  render() {
    return (
      <p>Je suis AccountFavoritesPage</p>
    );
  }
}

export default AccountFavoritesPage;
