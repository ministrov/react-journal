import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import { isPalindromeAnotherWay } from './utils/index.js';

// console.log(isPalindromeAnotherWay("Heah")) // false
// console.log(isPalindromeAnotherWay("Heeh")) // true
// console.log(isPalindromeAnotherWay("He")) // false
// console.log(isPalindromeAnotherWay("pep")) // true

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
