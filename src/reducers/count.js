import ACTION from '../constants/ACTION_TYPE';

const count = (state = 0, action) => {
  switch (action.type) {
    case ACTION.INC:
      return state + 1;
    case ACTION.DEC:
      return state - 1;
    default:
      return state;
  }
};

export default count;
