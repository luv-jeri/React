import React, { useContext } from 'react';
import { useCount } from '../contexts/count';
export default function A() {
  const countContext = useCount();
  return (
    <div>
      <h1>A - {countContext.count}</h1>
    </div>
  );
}
