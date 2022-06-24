import ACTION from '../constants/ACTION_TYPE';

const setNameAction = (name) => {
  return {
    type: ACTION.SET,
    payload: name,
  };
};

const unsetAction = () => {
  return {
    type: ACTION.UNSET,
  };
};

const addArrowAction = () => {
  return {
    type: ACTION.ARROW,
  };
};

export { setNameAction, unsetAction, addArrowAction };
