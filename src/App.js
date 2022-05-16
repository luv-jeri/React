import './App.css';
import React, { createContext } from 'react';
import A from './components/A';
import B from './components/B';
import C from './components/C';

export const name = createContext();
export const job = createContext();
export const count = createContext();

const heavy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  const [number, setNumber] = React.useState(0);
  return (
    <name.Provider value={'sanjay'}>
      <count.Provider
        value={{
          count: number,
          setCount: setNumber,
        }}
      >
        <job.Provider
          value={{
            job: ['developer', 'designer', 'tester', 'manager'],
            name: 'sanjay',
          }}
        >
          <div>I am whole application</div>
          <A />
          <B />
          <C />
        </job.Provider>
      </count.Provider>
    </name.Provider>
  );
}

export default App;
