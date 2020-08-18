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
          title : '회원관리',
          icon : 'AssignmentInd',
          children : [
            {
              title : '회원조회',
              icon : 'AssignmentInd',
            },
            {
              title : '휴면회원조회',
              icon : 'AssignmentInd',
            },
            {
              title : '탈퇴회원조회',
              icon : 'AssignmentInd',
            }
          ]
        },
        {
          title : '팝업관리',
          icon : 'FilterNone',
        },
        {
          title : '배너관리',
          icon : 'Bookmark'
        },
        {
          title : '이벤트관리',
          icon : 'EventNote',
          children : [
            {
              title : '이벤트조회',
              icon : 'EventNote',
            },
            {
              title : '응모내역조회',
              icon : 'EventNote',
            },
          ]
        },
        {
          title : 'CS관리',
          icon : 'Call',
          children: [
            {
              title : '1:1문의',
              icon : 'Call',
            }
          ]
        },
        {
          title : '운영관리',
          icon : 'Build',
          children: [
            {
              title : '공지사항',
              icon : 'Build',
            },
            {
              title : 'FAQ',
              icon : 'Build',
            },
            {
              title : '여행정보',
              icon : 'Build',
            }
          ]
        },
        {
          title : '포인트관리',
          icon : 'AttachMoney'
        },
        {
          title : '쿠폰관리',
          icon : 'LocalMovies',
          children: [
            {
              title : '바우처관리',
              icon : 'LocalMovies',
            }
          ]
        },
        {
          title : '기본설정',
          icon : 'Settings' ,
          children: [
            {
              title : '기본정보설정',
              icon : 'Settings' ,
            },
            {
              title : '관리자 비밀번호 변경',
              icon : 'Settings' ,
            },
            {
              title : '관리등급 권한 설정',
              icon : 'Settings' ,
            },
            {
              title : '약관관리',
              icon : 'Settings' ,
            },
          ]
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