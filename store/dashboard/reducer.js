import {dashboardActionTypes} from './action';

const initState = {
  user : {}
}

const dashboardReducer = (state = initState, action = {}) => {
  const {
    type = '',
    payload : {
      dashboard
    } = {}
  } = action;

  switch(type) {
    case dashboardActionTypes.INIT :
      return dashboard
    default :
      return state;
  }
}

export default dashboardReducer;