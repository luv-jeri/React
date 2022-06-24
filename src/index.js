import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

import './index.css';

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('🔴', store.getState());
});

const el = document.getElementById('root');

const root = ReactDOM.createRoot(el);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
