import './App.css';
import { useState } from 'react';

// const useState = (initial) => {
//   let specialVariable = initial;
//   const aFunctionThatChangesTheSpecialVariable = (value) => {
//     specialVariable = value;
//     root.render();
//   };
//   return [specialVariable, aFunctionThatChangesTheSpecialVariable];
// };

function App() {
  const classForTheContainer = 'container';

  const special = useState(0);
  const [count, setCount] = special;

  const [color, setColor] = useState('black');

  const boxStyle = {
    margin: '10px',
    border: '1px solid red',
    borderRadius: '10%',
    backgroundColor: color,
  };

  return (
    <div className={classForTheContainer}>
      <button
        className='btn'
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        className='btn'
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
      <div className='wrap'>
        <div className='box' style={boxStyle}></div>
      </div>
      {count}
      <div className='wrap'>
        <button
          className='btn'
          onClick={() => {
            setColor('red');
            console.log(color);
          }}
        >
          Red
        </button>
        <button
          className='btn'
          onClick={() => {
            setColor('Yellow');
            console.log(color);
          }}
        >
          Yellow
        </button>
        <button
          className='btn'
          onClick={() => {
            setColor('Green');
            console.log(color);
          }}
        >
          Green
        </button>
        <button
          className='btn'
          onClick={() => {
            setColor('Blue');
            console.log(color);
          }}
        >
          Blue
        </button>
      </div>
    </div>
  );
}

export default App;
