import React from 'react';
import { useRoutes } from 'react-router-dom';
import {
  CookiesProvider,
  useCookies,
} from 'react-cookie';
import { withReduxBoot } from './core';
import {
  ReducerRoot,
  SagaRoot,
} from './features/commons';
import { ThemeProvider } from './features/commons/theme/components';
import routes from './routes';

const App = () => {
  const [cookies] = useCookies();
  const { sessionId: isLoggedIn } = cookies;
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <CookiesProvider>
      <ThemeProvider>
        {routing}
      </ThemeProvider>
    </CookiesProvider>
  );
};

export default withReduxBoot(
  SagaRoot,
  ReducerRoot,
  App,
);
