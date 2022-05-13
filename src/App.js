import './App.css';
import Home from './pages/Home';
import About from './pages/About';

import { useState, useEffect } from 'react';

function App() {
  var path = window.location.pathname;
  var page = path.split('/').pop(); //` http://localhost:3000/about
  console.log(page);

  return (
    <div className='container'>
      <nav>
        <a href='/'>Home</a>
        <a href='/about'>About</a>
      </nav>
      {page === '' ? <Home /> : <About />}
    </div>
  );
}

export default App;
