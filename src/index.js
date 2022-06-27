import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { MantineProvider } from '@mantine/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/Auth.context';
import { NotificationsProvider } from '@mantine/notifications';
import { createStore } from './redux';
import { Provider } from 'react-redux';

const store = createStore((state = 0, action) => {
  return state;
});

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>
      <NotificationsProvider position='top-right' limit={10}>
        <Router>
          <AuthProvider>
            <App />
          </AuthProvider>
        </Router>
      </NotificationsProvider>
    </MantineProvider>
  </Provider>
);
