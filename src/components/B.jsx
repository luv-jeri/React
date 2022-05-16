import React, { useContext } from 'react';

import { count } from '../contexts/count';

export default function B() {
  const countContext = useContext(count);

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
