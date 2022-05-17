import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button/Button';
import PlzDoCard from './components/PlzDoCard/PlzDoCard';
import FloatingButton from './components/FloatingButton/floatingButton';
import AddTask from './components/AddTask/AddTask';

import db from './firebase';
import {
  collection,
  doc,
  addDoc,
  getDocs,
  deleteDoc,
  setDoc,
  onSnapshot,
} from 'firebase/firestore';

function App() {
  const todo_collection = collection(db, 'todos');

  const [tasks, setTasks] = useState([]);

  const getData = async () => {
    try {
      const data = await getDocs(todo_collection);

      const dataArr = [];

      data.forEach((doc) => {
        dataArr.push(doc.data());
      });

      setTasks(dataArr);
    } catch (e) {
      console.log(e);
    }
  };

  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    onSnapshot(todo_collection, (snapshot) => {
      const data = [];
      snapshot.forEach((doc) => {
        data.push(doc.data());
      });
      setTasks(data);
    });
  }, []);
  // ` addDoc
  // const addData = async (data) => {
  //   console.log('Adding data');
  //   try {
  //     const savedData = await addDoc(todo_collection, data);
  //     console.log(savedData.id);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const addData = async (data) => {
    console.log('Adding data');
    try {
      const newDoc = doc(todo_collection, `${data.id}`);

      const savedData = await setDoc(newDoc, data);
    } catch (e) {
      console.log(e);
    }
  };

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

    addData(newTask);
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

  const remove = async () => {
    const to_delete = doc(db, 'todos', 'PIWoTvYE0otlRhaQ9cxl');
    deleteDoc(to_delete);
  };
  remove();

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
