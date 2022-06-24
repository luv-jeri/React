import ACTION from '../constants/ACTION_TYPE';

const todo = (state = [], action) => {
  switch (action.type) {
    case ACTION.GET_TODO:
      return action.payload;
    case ACTION.RESET_TODO:
      return [];
    default:
      return state;
  }
};

export default todo;
