import React from 'react';
import { useCookies } from 'react-cookie';

const withCookies = (WrappedComponent) => (props) => {
  const [cookies, setCookie, removeCookie] = useCookies();

  return (
    <WrappedComponent
      {...props}
      cookies={cookies}
      setCookie={setCookie}
      removeCookie={removeCookie}
    />
  );
};

export default withCookies;
