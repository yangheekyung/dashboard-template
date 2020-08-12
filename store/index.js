import {applyMiddleware, combineReducers, createStore} from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import thunk from "redux-thunk";
import {HYDRATE} from 'next-redux-wrapper';
import dashboard from './dashboard/reducer';
import test from './test/reducer';

const debug = process.env.NODE_ENV !== 'production';
const middleware = [thunk];
const reducers = {dashboard, test};

const bindMiddleware = () => {
  if (debug) {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
};

const combinedReducer = combineReducers(reducers);

const initReducer = (state, action) => {
  const {
    type = '',
    payload = {}
  } = action;

  switch (type) {
    default :
      return combinedReducer(state, action);
    case HYDRATE:
      return {...state, ...payload};
  }
}

const initStore = context => createStore(initReducer, bindMiddleware());

export const wrapper = createWrapper(initStore);