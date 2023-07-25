import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import usersStore from './Redux/usersStore';

ReactDOM.render(
  <Router>
  <Provider store={usersStore}>
      <App />
      </Provider>
  </Router>,
  document.getElementById('root')
);
