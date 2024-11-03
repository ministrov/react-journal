import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

function returnNumFromRange(min, max) {
  let result = [];

  for (let i = min; i < max; i++) {
    result.push(i);
  }

  return result;
}

console.log(returnNumFromRange(4, 10));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
