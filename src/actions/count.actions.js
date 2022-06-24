import ACTION from '../constants/ACTION_TYPE';

const incrementAction = () => {
  return {
    type: ACTION.INC,
  };
};

const decrementAction = () => {
  return {
    type: ACTION.DEC,
  };
};

export { incrementAction, decrementAction };
