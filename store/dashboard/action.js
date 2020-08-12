const prefix = 'DASHBOARD_';

export const actionTypes = {
  INIT : `${prefix}INIT`,
  SIDEBAR_TOGGLE : `${prefix}SIDEBAR_TOGGLE`
}

export const init = (user) => ({
  type : actionTypes.INIT,
  payload : user
});

export const sidebarToggle = () => ({
  type : actionTypes.SIDEBAR_TOGGLE
});