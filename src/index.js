// react modules
import React from 'react';
import ReactDOM from 'react-dom';

// react route (i)
// import App from "./App";
import { BrowserRouter } from "react-router-dom";

// components
import Nav from './components/Nav';

// bootstrap, fontawesome
import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Nav />
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
