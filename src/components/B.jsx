import React, { useState } from 'react';
import names from './name.js';

export default function B({ setter }) {
  const surname = names[Math.floor(Math.random() * 150)];
  setter(surname);

  return <div>I am B and i will give surname : {surname}😀</div>;
}
