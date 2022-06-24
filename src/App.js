import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodo, resetTodo } from './actions';
function App() {
  const todo = useSelector((store) => store.todo);
  const dispatch = useDispatch();

  return (
    <div className='container'>
      <button
        onClick={() => {
          dispatch(getTodo());
        }}
      >
        GET TODO
      </button>
      <button
        onClick={() => {
          dispatch(resetTodo());
        }}
      >
        RESET TODO
      </button>
      <div>
        {todo.map((item) => {
          return (
            <div key={item.id} className='card-wrapper'>
              <div className='uid'>{item.uid}</div>
              <div className='title'>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
