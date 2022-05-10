import './App.css';
import { useState } from 'react';
import Box from './components/Box';
function App() {
  // let show = true;

  const [show, setShow] = useState(true);

  return (
    <div className='container'>
      <div className='wrap'>{show ? <Box /> : null}</div>
      <div className='wrap'>
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          {show ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
}

export default App;
