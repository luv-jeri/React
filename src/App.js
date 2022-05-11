import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button';
import PlzDoCard from './components/PlzDoCard/PlzDoCard';
import FloatingButton from './components/FloatingButton/floatingButton';
import AddTask from './components/AddTask/AddTask';

function App() {
  const [showAdd, setShowAdd] = useState(false);

  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleClick = () => {
    setShowAdd(!showAdd);
  };

  return (
    <div className='container'>
      {tasks.map((task) => {
        return <PlzDoCard title={task.title} task={task.task} />;
      })}
      {showAdd ? <AddTask addTaskFunction={addTask} setShowAdd={setShowAdd} /> : null}
      <FloatingButton click={handleClick} />
    </div>
  );
}

export default App;
