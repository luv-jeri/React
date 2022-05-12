import { useState } from 'react';
import './addTask.css';
import Button from '../Button/Button';

export default function AddTask({ addTaskFunction, setShowAdd }) {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleClick = () => {
    addTaskFunction({ title, task });
  };

  return (
    <div
      className='task-container'
      onKeyDown={(event) => {
        if (event.keyCode === 27) {
          setShowAdd(false);
        }
      }}
      onClick={(event) => {
        if (event.target.className === 'task-container') {
          setShowAdd(false);
        }
      }}
    > 
      <div
        className='task-wrap'
        onKeyDown={(e) => {
          if (e.code === 'Enter') {
            handleClick();
          }
          if (e.code === 'Escape') {
            setShowAdd(false);
          }
        }}
      >
        <h3>Add Task</h3>
        <input className='task-input' label='title' onChange={handleTitleChange} />
        <input className='task-input' label='task' onChange={handleTaskChange} />
        <Button title='ADD' click={handleClick}></Button>
      </div>
    </div>
  );
}
