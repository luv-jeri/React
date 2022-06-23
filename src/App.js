import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
          dispatch({ type: 'inc' });
        }}
      >
        ➕
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'dec' });
        }}
      >
        ➖
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'set', value: _name });
        }}
      >
        😎
      </button>
      <button
        onClick={() => {
          dispatch({ type: 'unset' });
        }}
      >
        🥲
      </button>
    </div>
  );
}

export default App;
