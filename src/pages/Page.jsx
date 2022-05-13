import React from 'react';
import './page.css';

export default function Page({ children }) {
  return (
    <div
      className='title'
      style={{
        backgroundColor: '#EC994B',
      }}
    >
      {children}
    </div>
  );
}
