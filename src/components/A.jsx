import React from 'react';
import names from './name.js';

export default function A({ randomNumber, setter }) {
  const name = names[randomNumber];

  setter(name);

  return <div>I will give you a random name .😀</div>;
}
