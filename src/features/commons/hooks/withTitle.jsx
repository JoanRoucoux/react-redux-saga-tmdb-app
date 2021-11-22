import React from 'react';
import { Helmet } from 'react-helmet';

const withTitle = (title) => (WrappedComponent) => (props) => (
  <>
    <Helmet>
      <title>
        {title ?? 'The Movie Database'}
        {' '}
        | Flixer
      </title>
    </Helmet>
    <WrappedComponent
      {...props}
    />
  </>
);

export default withTitle;
