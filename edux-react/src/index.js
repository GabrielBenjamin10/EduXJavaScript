import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Curso from './pages/curso';
import Login from './pages/login';
import Dica from './pages/dica';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import NaoEncontrada from './pages/naoencontrada';

ReactDOM.render(
  <React.StrictMode>
    <Dica/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
