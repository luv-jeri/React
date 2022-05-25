import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SingIn from './pages/auth/SingIn';
import SingUp from './pages/auth/SingUp';
import Home from './pages/app/Home';
import { useUser } from './context/User.context';

export default function App() {
  const { isLogged } = useUser();

  return (
    <>
      {!isLogged ? (
        <Routes>
          <Route path='/' element={<SingIn />}></Route>
          <Route path='/join' element={<SingUp />}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
      )}
    </>
  );
}
