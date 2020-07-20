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
      console.log('HYDRATE')
      return dashboard
    }
    case 'INIT' : {
      console.log('INIT')
      return dashboard
    }
    default : return state;
  }
}

export default dashboardReducer;