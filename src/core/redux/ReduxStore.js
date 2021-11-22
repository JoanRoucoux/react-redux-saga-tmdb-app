import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReduxReducers from './ReduxReducers';

// Add the reducer to your store on the 'router' key
// Also apply our middlware for navigating
const ReduxStore = (reducers) => {
  // prepare reducer and middle ware
  const reduxReducers = ReduxReducers(reducers);
  const sagaMiddleware = createSagaMiddleware();

  // create store
  const reduxStore = createStore(
    reduxReducers,
    compose(applyMiddleware(sagaMiddleware)),
  );

  // return middleware & store
  return {
    store: reduxStore,
    middleware: sagaMiddleware,
  };
};

export default ReduxStore;
