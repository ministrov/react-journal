import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const flatArray = arr => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else {
      newArr = [...arr[i]];
    }
  }

  return newArr;
}

console.log(flatArray([1, 2, 3, 4, [5, 6, 7, 8], [[10, 177]]]));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
