import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store from './store';

import App from './components/App';
import Home from './components/Home';
import Login from './components/Login';


ReactDOM.render((
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
      </Route>
    </Router>
  </Provider>
), document.getElementById('realworld-app'));
