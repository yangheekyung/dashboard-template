import update from 'immutability-helper';
import {actionTypes} from './action';

const initState = {}

const dashboardReducer = (state = initState, action = {}) => {
  const {
    type = '',
    payload = {}
  } = action;

  switch(type) {
    case actionTypes.INIT :
      return payload;
    default :
      return state;
  }
}

export default dashboardReducer;