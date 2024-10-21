import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// function myFilter(array, callback) {
//   const filteredArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       filteredArray.push(array[i]);
//     }
//   }

//   return filteredArray;
// };

// const numbers = [1, 2, 3, 4 ,5 ,6, 7, 8, 8, 9];

// const evenNumbers = myFilter(numbers, number => number % 2 === 0);

// console.log(evenNumbers);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
