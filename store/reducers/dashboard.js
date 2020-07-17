import {HYDRATE} from 'next-redux-wrapper';

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
    case HYDRATE : {
      return dashboard
    }
    case 'INIT' : {
      return dashboard
    }
    default : return state;
  }
}

export default dashboardReducer;