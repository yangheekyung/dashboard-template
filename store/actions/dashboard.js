const dashboardAction = {
  init : (user) => ({
    type : 'INIT',
    payload : {
      dashboard : {
        user
      }
    }
  })
};

export default dashboardAction;