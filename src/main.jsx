import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// function mapNative(arr, mapCallback) {
//   if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
//     return [];
//   } else {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//       result.push(mapCallback(arr[i], i, arr));
//     }

//     return result;
//   }
// };

// const numbers = [2, 4, 5, 6, 7];

// const multiplyNums = mapNative(numbers, num => num * 2);

// console.log(multiplyNums);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
