import ACTIONS from '../constants/ACTIONS';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return action.payload;
    case ACTIONS.DEL_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
