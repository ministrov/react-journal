import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function sum(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function calculate(a, b, fn) {
  console.log(typeof fn);
  console.log(fn.name);

  const res = fn(a, b);

  return res;
}

const result = calculate(3, 4, sum);

console.log(result);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
