import React, { useContext } from 'react';
import { count } from '../contexts/count';
export default function A() {
  const countContext = useContext(count);
  return (
    <div>
      <h1>A - {countContext.count}</h1>
    </div>
  );
}
