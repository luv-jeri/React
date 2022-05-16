import './App.css';
import React from 'react';
import A from './components/A';
import B from './components/B';
import C from './components/C';

import CountProvider from './contexts/count';

function App() {
  return (
    <CountProvider>
      <div>I am whole application</div>
      <A />
      <B />
      <C />
    </CountProvider>
  );
}

export default App;
