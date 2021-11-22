import React from 'react';
import { Provider } from 'react-redux';
import ReduxStore from './ReduxStore';

const withReduxBoot = (
  SagaRoot,
  ReducerRoot,
  WrappedComponent,
) => (props) => {
  // create redux store and saga middleware
  const {
    store,
    middleware,
  } = ReduxStore(ReducerRoot);

  // start saga middleware
  middleware.run(SagaRoot);

  // wrap component by redux
  return (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );
};

export default withReduxBoot;
