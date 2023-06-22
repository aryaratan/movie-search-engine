
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import rootReducer from './reducers';
import './index.css';


const logger = ({ dispatch, getState }) => (next) => (action) => {
  // my middlware
  console.log('ACTION', action);
  next(action);
};

// structure of thunk
/*
  const thunk = (store) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(store.dispatch);
    }
  }
*/

// creating store
const store = createStore(rootReducer, applyMiddleware(logger, thunk));



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
