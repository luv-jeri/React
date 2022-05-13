import React, { useState } from 'react';
import './card.css';

export default function Card({ head, value, setter }) {
  const [card, setCard] = useState('I am a card🟢🟢');

  setter(card);

  return (
    <div className='card'>
      <h2>{head} </h2>
      <h2>- {value} </h2>
    </div>
  );
}
