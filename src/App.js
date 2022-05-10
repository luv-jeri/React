import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button';
import Greeter from './components/Greeter/Greeter';
function App() {
  const [showGreeter, setShowGreeter] = useState(true);
  return (
    <div className='container'>
      {showGreeter ? <Greeter /> : null}
      <Button
        title={showGreeter ? 'hide' : 'show'}
        click={() => {
          setShowGreeter(!showGreeter);
        }}
      />
    </div>
  );
}

export default App;
