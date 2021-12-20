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
  AccountDetailsFragment,
} = AccountProvider;

@withCookies
@withTitle('Account details')
@Reduxify((state) => ({
  // define state to extract
  ...AccountDetailsFragment(state),
}), {
  // define actions to execute
  ...AccountDispatcher,
})
class AccountDetailsPage extends Component {
  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {
    const {
      cookies,
      requestAccountDetails,
    } = this.props;
    const { sessionId } = cookies;
    requestAccountDetails({ sessionId });
  };

  render() {
    return (
      <p>Je suis AccountDetailsPage</p>
    );
  }
}

export default AccountDetailsPage;
