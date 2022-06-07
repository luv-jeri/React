import React, { useState, useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import SingIn from './pages/auth/SingIn';
import SingUp from './pages/auth/SingUp';
import Layout from './pages/app/Layout';
import useAuth from './context/Auth.context';
import { Button, Text } from '@mantine/core';
import Test from './components/Test';
export default function App() {
  const [state, setState] = useState(true);
  console.log('render App');
  return (
    <div>
      {state ? <h3>Hello</h3> : <h3>Bye</h3>}
      <Button
        onClick={() => {
          setState(!state);
        }}
      >
        Click
      </Button>

      <Test value={10}></Test>
    </div>
  );
}

//  const { user } = useAuth();
// {
//   !user ? (
//     <Routes>
//       <Route path='/' element={<SingIn />}></Route>
//       <Route path='/join' element={<SingUp />}></Route>
//     </Routes>
//   ) : (
//     <Layout />
//   );
// }
