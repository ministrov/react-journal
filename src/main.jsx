import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// import { validStr } from './utils/index.js';

// console.log(validStr("())")) // false
// console.log(validStr("(()")) // false
// console.log(validStr("(())")) // true
// console.log(validStr("(()))")) // false
// console.log(validStr(")())")) // false
// console.log(validStr("")) // true



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
