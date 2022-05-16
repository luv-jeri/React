import './App.css';
import { useState } from 'react';
import A from './components/A';
import B from './components/B';
import C from './components/C';

function App() {
  const [randomNumber, setRandomNumber] = useState(0);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  return (
    <div className='container'>
      <h1> I am parent A B C</h1>

      <A randomNumber={randomNumber} setter={setName} />
      <B setter={setSurname} />
      <C name={name} surname={surname} />

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
