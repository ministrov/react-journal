import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// const links = [...document.querySelectorAll('div')];

// console.log(links.forEach((link) => link.));
// ;const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// console.log(randomInRange(2, 5))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
