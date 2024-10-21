import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const lazyImages = document.querySelectorAll('.lazy-image');

const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log('Пользователь почти докрутил до картинки!')

      entry.target.src = entry.target.dataset.src
      observer.unobserve(entry.target)
    }
  })
}

const options = {
  // root: по умолчанию window,
  // но можно задать любой элемент-контейнер
  rootMargin: '0px 0px 75px 0px',
  threshold: 0,
}


const observer = new IntersectionObserver(callback, options);

console.log(observer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
