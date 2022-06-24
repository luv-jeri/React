import ACTION from '../constants/ACTION_TYPE';
import axios from 'axios';

// const getTodo = async () => {
//   const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

//   return {
//     type: ACTION.GET_TODO,
//     payload: data,
//   };
// };
const getTodo = () => {
  return async (dispatch, getState) => {
    console.log(getState());
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos');

    dispatch({
      type: ACTION.GET_TODO,
      payload: data,
    });
  };
};

const resetTodo = () => {
  return {
    type: ACTION.RESET_TODO,
  };
};

export { getTodo, resetTodo };
