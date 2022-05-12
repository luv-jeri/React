import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import PlzDoCard from './components/PlzDoCard/PlzDoCard';
import FloatingButton from './components/FloatingButton/floatingButton';
import AddTask from './components/AddTask/AddTask';

function App() {
  const [showAdd, setShowAdd] = useState(false);

  const offlineTask = JSON.parse(localStorage.getItem('task'));

  const [tasks, setTasks] = useState(offlineTask || []);

  useEffect(() => {
    localStorage.setItem('task', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const { title, task: taskText } = task;
    if (!title || !taskText) {
      alert('Please fill in all fields');
      return;
    }
    const randomId = Math.floor(Math.random() * 1000000);
    const newTask = {
      id: randomId,
      title,
      task: taskText,
    };
    const newTaskArray = [...tasks, newTask];
    setTasks(newTaskArray);
    // setTasks([...tasks, {...task, id: randomId}]);
  };

  const editTask = (id, edit) => {
    const { title, task } = edit;

    const updatedTasks = tasks.map((task_el) => {
      if (task_el.id === id) {
        return {
          title,
          task,
        };
      }
      return task_el;
    });

    setTasks(updatedTasks);
  };
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    console.log(updatedTasks);

    setTasks(updatedTasks);
  };

  const handleClick = () => {
    setShowAdd(!showAdd);
  };

  console.log(tasks);

  return (
    <div className='container'>
      {tasks.map((task) => {
        return (
          <PlzDoCard
            editTaskFunction={editTask}
            deleteTaskFunction={deleteTask}
            title={task.title}
            task={task.task}
            id={task.id}
          />
        );
      })}
      {showAdd ? <AddTask addTaskFunction={addTask} setShowAdd={setShowAdd} /> : null}
      <FloatingButton click={handleClick} />
    </div>
  );
}

export default App;
