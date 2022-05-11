import React from 'react';
import './flotingButton.css';
export default function FloatingButton({ click }) {
  return (
    <div className='floating-wrap' onClick={click}>
      <span></span>➕
    </div>
  );
}
