import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// function returnStringAndNumber(num) {
//   switch (num) {
//     // case num < 25:
//     //   return `${num} - компьютерa`;
//     case num === 25:
//       return `${num} - компьютеров`;
//     case num === 41:
//       return `${num} - компьютер`;
//     case num === 1048:
//       return `${num} - компьютеров`;
//     default:
//       return `${num} - компьютерa`;
//   }
// }

// console.log(returnStringAndNumber(5));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
