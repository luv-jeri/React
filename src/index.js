import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from 'react-router-dom';
import UserContext from './context/User.context';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
  <UserContext>
    <Router>
      <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
        <App />
      </MantineProvider>
    </Router>
  </UserContext>
);
