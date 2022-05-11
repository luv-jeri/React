import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button';
import Greeter from './components/Greeter/Greeter';
import Board from './components/Board/Board';
function App() {
  const [showBoard, setShowBoard] = useState(true);

  const handleShowHide = () => {
    setShowBoard(!showBoard);
  };
  return (
    <div className='container'>
      {showBoard ? <Board /> : null}
      <Button title={showBoard ? 'hide' : 'show'} click={handleShowHide} />
    </div>
  );
}

export default App;
