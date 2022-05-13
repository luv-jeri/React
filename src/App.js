import './App.css';
import { useRef, useState, useEffect } from 'react';
import Button from './components/Button';
import Card from './components/Card';
function App() {
  const [count, setCount] = useState(0);
  //setCount( pass some value to setCount )
  const [card, setCard] = useState('');

  return (
    <div className='container'>
      <h1>{card}</h1>
      <Card head={'Count'} value={count} setter={setCard} />
      <Button
        title={'INC'}
        fun={() => {
          setCount(count + 1);
        }}
      />
    </div>
  );
}

export default App;
