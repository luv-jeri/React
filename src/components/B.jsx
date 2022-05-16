import React from 'react';
import { useCount } from '../contexts/count';

export default function B() {
  const countContext = useCount();

  return (
    <div>
      <button
        onClick={() => {
          countContext.setCount(countContext.count + 1);
        }}
      >
        INC
      </button>
    </div>
  );
}
