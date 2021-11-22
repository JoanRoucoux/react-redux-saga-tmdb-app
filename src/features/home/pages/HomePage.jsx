import React, { Component } from 'react';
import { withTitle } from '../../commons';
import MediaDiscover from '../commons/components/MediaDiscover';
import WhatIsPopular from '../commons/components/WhatIsPopular';
import JoinToday from '../commons/components/JoinToday';

@withTitle('Home')
class HomePage extends Component {
  // initial state
  state = {};

  // did mount staff
  componentDidMount() {
    this.initPage();
  }

  initPage = () => {};

  render() {
    return (
      <>
        <MediaDiscover />
        <WhatIsPopular />
        <JoinToday />
      </>
    );
  }
}

export default HomePage;
