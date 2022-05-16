import './App.css';
import { useState } from 'react';
import A from './components/A';

function App() {
  // const states = useState(0); //` [ 0 , setter ]

  // const randomNumber = states[0]
  // const setRandomNumber = states[1]

  const [randomNumber, setRandomNumber] = useState(0);

  // const [randomNumber, setRandomNumber] = useState(0);

  return (
    <div className='container'>
      <A random={randomNumber} setRandomNumber={setRandomNumber} />

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
