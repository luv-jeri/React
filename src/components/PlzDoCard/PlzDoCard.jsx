import React, { useState } from 'react';
import './plzDoCard.css';
import { FiEdit2 } from 'react-icons/fi';
import { AiOutlineCheck } from 'react-icons/ai';
import { AiOutlineDelete } from 'react-icons/ai';
export default function PlzDoCard(props) {
  const { title, task, id, editTaskFunction, deleteTaskFunction } = props;

  const [edit, setEdit] = useState(false);

  const [editTitle, setEditTitle] = useState(title);
  const [editTask, setEditTask] = useState(task);

  const handleTitleChange = (e) => {
    setEditTitle(e.target.value);
  };

  const handleTaskChange = (e) => {
    setEditTask(e.target.value);
  };

  const handleClick = () => {
    editTaskFunction(id, { title: editTitle, task: editTask });
    setEdit(false);
  };

  const handleDelete = () => {
    deleteTaskFunction(id);
  };

  return (
    <div
      className='card-wrap'
      onKeyDown={(event) => {
        if (event.keyCode === 27) {
          setEdit(false);
        }
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {!edit ? (
          <h1>{title}</h1>
        ) : (
          <input
            className='card-input'
            label='title'
            value={editTitle}
            onChange={handleTitleChange}
            style={{
              fontWeight: 'bold',
              fontSize: '1.1rem',
            }}
          />
        )}
        {
          <div>
            {edit ? (
              <div>
                <AiOutlineCheck className='card-edit-icon' onClick={handleClick} />
                <AiOutlineDelete className='card-edit-icon' onClick={handleDelete} />
              </div>
            ) : (
              <FiEdit2
                onClick={() => {
                  setEdit(!edit);
                }}
                className='card-edit-icon'
              />
            )}
          </div>
        }
      </div>
      {!edit ? (
        <h4>{task}</h4>
      ) : (
        <input
          className='card-input'
          label='task'
          value={editTask}
          onChange={handleTaskChange}
        />
      )}
    </div>
  );
}
