import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { MantineProvider } from '@mantine/core';
import './index.css';

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
  <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
    <App />
  </MantineProvider>
);
