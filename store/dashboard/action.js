const prefix = 'DASHBOARD_';

export const dashboardActionTypes = {
  INIT : `${prefix}INIT`
}

export const init = (user) => (dispatch) => dispatch({
  type : dashboardActionTypes.INIT,
  payload : {
    dashboard : {
      user
    }
  }
});