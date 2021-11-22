import React, { Component } from 'react';
import { withTitle } from '../../commons';

@withTitle('About')
class AboutPage extends Component {
  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {};

  render() {
    return <p>Je suis AboutPage</p>;
  }
}

export default AboutPage;
