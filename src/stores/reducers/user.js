const INITIAL_STATE = {
  loginLoading: false,
};
const mainPageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'AUTH_REQUEST':
      return { ...state, loginLoading: true };
    default:
      return state;
  }
};

export default mainPageReducer;
