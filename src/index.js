import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App1 from './App1';
import { Provider } from 'react-redux';
import usersStore from './Redux/usersStore';

ReactDOM.render(
  <Router>
  <Provider store={usersStore}>
      <App1 />
      </Provider>
  </Router>,
  document.getElementById('root')
);
