import React from 'react';

export default function A(props) {
  const { random, setRandomNumber } = props;

  return (
    <div>
      <h1>A random Number : {random}</h1>
      <button
        onClick={() => {
          const tempRandomNumber = Math.floor(Math.random() * 100);
          setRandomNumber(tempRandomNumber);
        }}
      >
        Generate a random number
      </button>
    </div>
  );
}
