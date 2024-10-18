import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
// import { camelize } from './utils/index.js';

// const flatArray = arr => {
//   let newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       newArr.push(arr[i]);
//     } else {
//       newArr = [...arr[i]];
//     }
//   }

//   return newArr;
// }

// console.log(flatArray([1, 2, 3, 4, [5, 6, 7, 8], [[10, 177]]]));

function camelize(string) {
  var splitedStr = string.split('-');

  for (var i = 1; i < splitedStr.length; i++) {
    splitedStr[i] = splitedStr[i][0].toUpperCase() + splitedStr[i].slice(1);
  }

  string = splitedStr.join('');

  return string;
};

// function camelize(str) {
//   var arr = str.split('-');
//   for (var i = 1; i < arr.length; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
//   str = arr.join('');
//   return str;
// }

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
