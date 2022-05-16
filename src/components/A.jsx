import React, { useState } from 'react';
import names from './name.js';

export default function A({ randomNumber, setter }) {
  const name = names[randomNumber];
  setter(name);

  return <div>I am A and i will give name : {name}😀</div>;
}
