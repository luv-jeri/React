import './App.css';
import { useState } from 'react';
import Button from './components/Button';
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
    display : 'flex',
    justifyContent : 'center',
    alignItems : 'center',
    color : 'white',
  };

  return (
    <div className={classForTheContainer}>
      <Button
        title='increase'
        click={() => {
          setCount(count + 1);
        }}
      />
      <Button
        title='decrease'
        click={() => {
          setCount(count - 1);
        }}
      />
      <div className='wrap'>
        <div className='box' style={boxStyle}>
          <h1>{count}</h1>
        </div>
      </div>
      <div className='wrap'>
        {/* {Button("Red")} */}
        <Button
          title='Red'
          click={() => {
            setColor('red');
          }}
        />
        <Button
          title='Yellow'
          click={() => {
            setColor('yellow');
          }}
        />
        <Button
          title='Green'
          click={() => {
            setColor('green');
          }}
        />
        <Button
          title='Blue'
          click={() => {
            setColor('blue');
          }}
        />
      </div>
    </div>
  );
}

export default App;
