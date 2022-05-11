import React, { useState, useEffect } from 'react';
import './board.css';
import axios from 'axios';
export default function Board() {
  const [text, setText] = useState('Type here.......');
  const [users, setUsers] = useState([]);

  const handleInput = (e) => {
    setText(e.target.value);
  };

  const getSomeData = async () => {
    const response = await axios.get('https://reqres.in/api/users?page=2');
    const { data } = response;
    setUsers(data.data);
    console.log('Fetching data');
  };

  useEffect(() => {
    console.log('Board is here'); //` this will be called  before the render
    getSomeData();
    return () => {
      console.log('Board is saying bye.'); //` this will be called before the unmount (jane se phle)
    };
  }, []);

  return (
    <div className='board-parent'>
      <div className='board'>{text}</div>
      {users.map((user) => {
        return (
          <div className='board-card' key={user.id}>
            {user.first_name}
          </div>
        );
      })}
      <input className='board-input' onChange={handleInput} />
    </div>
  );
}
