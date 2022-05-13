import './App.css';
import { useRef, useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const refVariable = useRef(0);

  let simpleVar = 0;

  console.log('RERENDER');
  console.log('refVariable', refVariable);
  console.log('count', count);
  console.log('simpleVar', simpleVar);

  console.log('document', document);
  // ! DO NOT USE THIS
  //   const nameInput = document.getElementById('name-input');
  //   console.log('INPUT', nameInput); -> null
  // nameInput.focus();

  const inputRef = useRef(0);
  console.log('inputRef', inputRef);
  // focus on input

  return (
    <div className='container'>
      <input
        id='name-input'
        ref={inputRef}
        value={inputRef.current.value}
        onChange={(e) => {
          inputRef.current = e.target.value;
          console.log(inputRef);
        }}
      />
      <div>
        <h1>useRef</h1>
        <h2>Count : {count}</h2>
        <h2>Ref : {refVariable.current}</h2>
      </div>
      <>
        <h4>State Button</h4>
        <div className='btn-grp'>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
      </>
      <>
        <h4>Simple Var</h4>
        <div className='btn-grp'>
          <button
            onClick={() => {
              simpleVar = simpleVar + 1;
              console.log(simpleVar);
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              simpleVar = simpleVar - 1;
              console.log(simpleVar);
            }}
          >
            Decrement
          </button>
        </div>
      </>
      <>
        <h4>Ref Button</h4>
        <div className='btn-grp'>
          <button
            onClick={() => {
              refVariable.current = refVariable.current + 1;
              console.log(refVariable);
            }}
          >
            Increment
          </button>
          <button
            onClick={() => {
              refVariable.current = refVariable.current - 1;
              console.log(refVariable);
            }}
          >
            Decrement
          </button>
        </div>
      </>
    </div>
  );
}

export default App;
