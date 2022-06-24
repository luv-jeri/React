import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementAction,
  decrementAction,
  setNameAction,
  unsetAction,
  addArrowAction,
} from './actions';

function App() {
  const name = useSelector((state) => state.name);
  const count = useSelector((state) => state.count);

  const [_name, setName] = useState('');

  // const r = useSelector((state) => state);

  // const name = r.name;
  // const count = r.count;

  const dispatch = useDispatch(); //` store.dispatch

  return (
    <div className='container'>
      <h1> Redux </h1>
      <h3>Count : {count}</h3>
      <h3>Name : {name}</h3>
      <input type='text' value={_name} onChange={(e) => setName(e.target.value)} />
      <br />
      <button
        onClick={() => {
          dispatch(incrementAction());
        }}
      >
        ➕
      </button>
      <button
        onClick={() => {
          dispatch(decrementAction());
        }}
      >
        ➖
      </button>
      <button
        onClick={() => {
          dispatch(setNameAction(_name));
        }}
      >
        😎
      </button>
      <button
        onClick={() => {
          dispatch(unsetAction());
        }}
      >
        🥲
      </button>
      <button
        onClick={() => {
          dispatch(addArrowAction());
        }}
      >
        😁
      </button>
    </div>
  );
}

export default App;
