import React from 'react';

export default function Button({ title, fun }) {
  console.log(fun);
  return (
    <button
      onClick={() => {
        fun();
      }}
    >
      {title}
    </button>
  );
}
