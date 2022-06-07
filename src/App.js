import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SingIn from './pages/auth/SingIn';
import SingUp from './pages/auth/SingUp';
import Layout from './pages/app/Layout';
import useAuth from './context/Auth.context';
import { Button, Text } from '@mantine/core';

export default function App() {
  const { user } = useAuth();

  const [count, setCount] = useState(0);

  return (
    <div>
      <Text
        component='span'
        align='center'
        variant='gradient'
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        size='xl'
        weight={700}
        style={{ fontFamily: 'Greycliff CF, sans-serif' }}
      >
        Count - {count}
      </Text>
      <Button
        onClick={() => {
          setCount((previousState) => {
            return previousState + 1;
          });
          setCount((previousState) => {
            return previousState + 1;
          });
        }}
      >
        Increment{' '}
      </Button>
    </div>
  );
}

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
