import React from 'react';
import './button.css';

//` ekHiParameter = props
export default function Button(props) {
  const { title, click } = props;
  return (
    <button onClick={click} className='btn'>
      {title}
    </button>
  );
}
