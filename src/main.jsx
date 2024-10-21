import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import { isPalindromeArrow } from './utils/index.js';

// const isPalindromeArrow = (str) => str === str.split('').reverse().join('');

// console.log(isPalindromeArrow("level"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
