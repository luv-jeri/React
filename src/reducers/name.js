import ACTION from '../constants/ACTION_TYPE';

const name = (state = 'sanjay', action) => {
  switch (action.type) {
    case ACTION.SET:
      return action.payload;
    case ACTION.UNSET:
      return '';
    case ACTION.ARROW:
      return `---> ${state} <---`;
    default:
      return state;
  }
};

export default name;
