import {applyMiddleware, createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import thunk from "redux-thunk";
import reducers from './reducers';

const debug = process.env.NODE_ENV !== 'production';
const middleware = [thunk];

const bindMiddleware = () => {
  if (debug) {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const store = context => createStore(reducers, bindMiddleware());

export const wrapper = createWrapper(store);