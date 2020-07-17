import {applyMiddleware, createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import reducers from './reducers';

const debug = process.env.NODE_ENV !== 'production';

const makeMiddleware = () => {
  const middleware = [];

  if (debug) {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware);
}

const store = context => createStore(reducers, makeMiddleware());

export const wrapper = createWrapper(store);