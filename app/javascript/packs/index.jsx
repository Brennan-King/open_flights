import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';
import {BrowserRouter as Router, Route} from 'react-router-dom';

/**
 * Entry point for the front-end of the application.
 */
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      <Router>
        <Route path="/" component={App} />
      </Router>,
      document.body.appendChild(document.createElement('div')),
  );
});
