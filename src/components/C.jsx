import React from 'react';
import names from './name.js';

export default function C({ name, surname }) {
  return (
    <div>
      I am C and i will show the names {name} {surname}😀
    </div>
  );
}
