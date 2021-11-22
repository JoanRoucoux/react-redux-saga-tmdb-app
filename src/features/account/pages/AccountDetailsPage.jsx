import React, { Component } from 'react';
import { withTitle } from '../../commons';

@withTitle('Account details')
class AccountDetailsPage extends Component {
  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {};

  render() {
    return (
      <p>Je suis AccountDetailsPage</p>
    );
  }
}

export default AccountDetailsPage;
