// IE
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

// react modules
import React from 'react';
import ReactDOM from 'react-dom';

// react route (i)
// import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// components
import Nav from './components/Nav';
import Home from './components/Home';
import Board from './components/Board';

// bootstrap, (i))
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Nav />
    
    <Switch>
      {/* HOME */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Login */}
      <Route path="/login">

      </Route>

      {/* Main */}
      <Route path="/main">

      </Route>

      {/* Board */}
      <Route path="/board">
        <Board />
      </Route>

      {/* 404 */}
      <Route path="/">
        <h1>Not found</h1>
      </Route>

    </Switch>

  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
