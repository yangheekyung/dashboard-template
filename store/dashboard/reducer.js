import update from 'immutability-helper';
import {actionTypes, sidebarToggle} from './action';

const initState = {
  user : {},
  layout : {
    common : {
      sidebarToggle: false,
    },
    header : {},
    sidebar : {
      list : [
        {
          title : '회원',
          icon : 'AssignmentInd'
        },
        {
          title : '팝업관리',
          icon : 'FilterNone'
        },
        {
          title : '배너관리',
          icon : 'Bookmark'
        },
        {
          title : '이벤트관리',
          icon : 'EventNote'
        },
        {
          title : 'CS관리',
          icon : 'Call'
        },
        {
          title : '운영관리',
          icon : 'Build'
        },
        {
          title : '포인트관리',
          icon : 'AttachMoney'
        },
        {
          title : '쿠폰관리',
          icon : 'LocalMovies'
        },
        {
          title : '기본설정',
          icon : 'Settings'
        },
      ],
      sidebarWidth : 240
    },
    main : {}
  }
}

const dashboardReducer = (state = initState, action = {}) => {
  const {
    type = '',
    payload = {}
  } = action;

  switch(type) {
    case actionTypes.INIT :
      return update(state, {
        user : {$set: payload}
      });
    case actionTypes.SIDEBAR_TOGGLE :
      return update(state, {
        layout : {
          common : {
            $toggle : ['sidebarToggle']
          }
        }
      })
    default :
      return state;
  }
}

export default dashboardReducer;