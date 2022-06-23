import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import './index.css';

const count = (state = 0, action) => {
  switch (action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    default:
      return state;
  }
};

const name = (state = 'sanjay', action) => {
  switch (action.type) {
    case 'set':
      return action.value;
    case 'unset':
      return '';
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  count,
  name,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

console.log(store.getState());

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
