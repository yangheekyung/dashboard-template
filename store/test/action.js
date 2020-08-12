const prefix = 'TEST_';

export const actionTypes = {
  INIT : `${prefix}INIT`,
}

export const init = () => ({
  type : actionTypes.INIT,
  payload : {data : 'test'}
});