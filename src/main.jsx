import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// function* hello_and_bye() {
//   yield 'Hello';
//   yield 'Goodbye';
// }

// const say = hello_and_bye();

// console.log(say.next().value);
// // 'Hello'
// console.log(say.next().value);
// // 'Goodbay'
// console.log(say.next().value);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
