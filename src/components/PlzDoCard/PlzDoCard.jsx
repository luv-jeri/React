import React from 'react';
import './plzDoCard.css';

export default function PlzDoCard({ title, task, id }) {
  return (
    <div className='card-wrap'>
      <h1>{title}</h1>
      <h4>{task}</h4>
    </div>
  );
}
