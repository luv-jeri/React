import './App.css';
import { useState } from 'react';
import A from './components/A';

function App() {
  // const states = useState(0); //` [ 0 , setter ]

  // const randomNumber = states[0]
  // const setRandomNumber = states[1]

  const [randomNumber, setRandomNumber] = useState(0);
  const [name, setName] = useState('');

  return (
    <div className='container'>
      <h1> A random name : {name}</h1>

      <A randomNumber={randomNumber} setter={setName} />

      <button
        onClick={() => {
          const tempRandomNumber = Math.floor(Math.random() * 100);
          setRandomNumber(tempRandomNumber);
        }}
      >
        Generate a random number
      </button>

      {/* {A({
        name: 'Sanjay',
        age: 22,
      })}
      {A({
        name: 'Mukesh',
        age: 23,
      })} */}
    </div>
  );
}

export default App;
