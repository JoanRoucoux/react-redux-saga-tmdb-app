import React from 'react';
import { useRoutes } from 'react-router-dom';
import { withReduxBoot } from './core';
import {
  ReducerRoot,
  SagaRoot,
  SessionUtils,
} from './features/commons';
import { ThemeProvider } from './features/commons/theme/components';
import routes from './routes';

const {
  retrieveSessionId,
} = SessionUtils;

const App = () => {
  const isLoggedIn = retrieveSessionId();
  const routing = useRoutes(routes(isLoggedIn));

  return (
    <ThemeProvider>
      {routing}
    </ThemeProvider>
  );
};

export default withReduxBoot(
  SagaRoot,
  ReducerRoot,
  App,
);
