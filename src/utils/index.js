// // import { makeBinarySearch } from './utils';

import { splitVendorChunk } from "vite";

// // let arr = [2, 3, 4, 10, 40, 56, 123, 345];
// // let x = 12;

// // if (makeBinarySearch(arr, x)) {
// //   console.log('Element found!');
// // } else {
// //   console.log('Element not found!');
// // }

// export function makeBinarySearch(array, x) {
//   let start = 0, end = array.length - 1;
//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (array[mid] === x) {
//       return true;
//     } else if (array[mid] < x) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//   }

//   return false;
// }

// // const array = ['1', '1', '2', '2', '3', '4', '4', '5', '5'];

// // const getUniqueFrequency = (arr) => {
// //   let result = {};

// //   for (let i = 0; i < arr.length; i++) {
// //     if (result[arr[i]]) {
// //       result[arr[i]] = result[arr[i]] + 1;
// //     } else {
// //       result[arr[i]] = 1;
// //     }
// //   }
// //   // for (const num of arr) {
// //   //   result[num] = result[num] ? result[num] + 1 : 1;
// //   // }

// //   return result;
// // };

// // console.log(getUniqueFrequency(array));

// // const array = ['1', '1', '2', '2', '3', '4', '4', '5', '5'];

// // const frequency = array.reduce((acc, item) => {
// //   acc[item] = (acc[item] || 0) + 1;
// //   return acc;
// // }, {});

// // console.log(frequency);

// export default function doAnotherBinarySearch(numbers, x) {
//   let startIndex = 0, endIndex = numbers.length - 1;

//   while (startIndex <= endIndex) {
//     let mid = Math.floor((startIndex + endIndex) / 2);

//     if (numbers[mid] === x) {
//       return true;
//     } else if (numbers[mid] < x) {
//       startIndex = mid + 1;
//     } else {
//       endIndex = mid - 1;
//     }
//   }

//   return false;
// };

// // Проверить на валидность строку, у каждой открывающей скобки ( должна быть закрывающая ее скобка
// export function validStr(str) {
//   const strArr = str.split("");
//   const stack = [];

//   for (let char of strArr) {
//     if (char.startsWith('(')) {
//       stack.push(char);
//     } else {
//       if (stack.length === 0) {
//         return false;
//       }

//       const top = stack.pop();

//       if (top === '(' && char !== ')') {
//         return false;
//       }
//     }
//   }

//   return stack.length === 0;
// }

// // Тест кейсы
// // console.log(validStr("())")) // false
// // console.log(validStr("(()")) // false
// // console.log(validStr("(())")) // true
// // console.log(validStr("(()))")) // false
// // console.log(validStr(")())")) // false
// // console.log(validStr("")) // true

// // Определить, является ли строка переданная в аргумент полиндромом
// // Выполнить через цикл
// // Примеры смотрим в тест-кейсах

// export function isPalindrome(str) {
//   const reversedStr = str.split('').reverse().join('');

//   if (str.toLowerCase() === reversedStr.toLowerCase()) {
//     return true;
//   }

//   return false;
// }

const isPalindromeArrow = (str) => str === str.split('').reverse().join('');

// export function isPalindromeAnotherWay(string) {
//   let reversedString = '';

//   for (let i = string.length - 1; i > string.length; i--) {
//     reversedString += string[i];
//   }

//   if (string.toLowerCase() === reversedString.toLowerCase()) {
//     return true;
//   }

//   return false;
// };

// Тест-кейсы
// console.log(isPalindrome("Heah")) // false
// console.log(isPalindrome("Heeh")) // true
// console.log(isPalindrome("He")) // false
// console.log(isPalindrome("pep")) // true

// number
// string
// boolean
// object
// bigInt
// null
// undefined
// Symbol

// {
//   console.log(typeof null)
//   console.log(typeof typeof null)
// }

// let a = 10;

// function sum(b) {
//   return a + b;
// }

// a = 20;

// console.log(sum(23));

// {
//   function foo() {
//     if (true) {
//       console.log(a);
//       var a = 10;
//     }
//     console.log(a);
//   }

//   // console.log(a);

//   foo();
// }

// function counter() {
//   let count = 0;

//   return function () {
//     count = count + 1;
//     return count;
//   }
// }

// const newCount = counter();
// const newCount2 = counter();

// console.log(newCount());
// console.log(newCount());
// console.log(newCount());
// console.log(newCount());

// console.log(newCount2());
// console.log(newCount2());
// console.log(newCount2());
// console.log(newCount2());

// Array.fill();

// function pow(n, x) {
//   if (x == 1) {
//     return n;
//   } else {
//     return n * pow(n, x - 1)
//   }
// }

// console.log(pow(3, 3));

// function pow2(n, x) {
//   let res = n;

//   for (let i = 1; i < x; i++) {
//     res *= n;
//   }

//   return res;
// }

// console.log(pow2(3, 3));

// function pow3(n, x) {
//   let res = n;

//   while (1 < x) {
//     res *= n;
//     x--;
//   }

//   return res;
// }

// console.log(pow3(3, 3));

// High order function

// function highOrderFunc(callback, number) {
//   return callback(number);
// }

// const array = [1, 1, 2, 2];

// console.log(array.__proto__.__proto__);

// const one = array.filter((num) => num === 1);

// console.log(one);

// const obj = {
//   name: 'Anton',
//   walk(a, b) {
//     const sum = a + b;
//     return `${this.name} : ${sum}`;
//   }
// };

// console.log(obj.walk());

// obj.walk.call('Petr');

// console.log(obj.walk.call({ name: 'Petr'}, 50, 50));
// console.log(obj.walk.apply({ name: 'Max'}, [50, 50]));
// console.log(obj.walk.apply({ name: 'Max2'}, [50, 50]));
// const walkWrapper = obj.walk.bind({ name: 'Max3' }, 50);
// console.log(walkWrapper(1000));
// foo.apply();
// foo.bind();

// Проверка объекта на существование ключей
// const obj2 = { name: 'Petr', age: 34 };

// const keys = Object.keys(obj2);

// console.log(keys.length !== 0);

{
  // Разложить элементы массива
  // input [1, 2, 3, 4, [5, 6, 7, 8], [[10, 177]]]
  // output [1,2,3,4,5,6,7,8,10,177]

  // const flatArray = arr => {
  //   const newArr = [];

  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr[i] !== Array.isArray(arr[i])) {
  //       newArr.push(arr[i]);
  //     } else {
  //       newArr = [...i];
  //     }
  //   }

  //   return newArr;
  // }

  // console.log(flatArray([1, 2, 3, 4, [5, 6, 7, 8], [[10, 177]]]));
}

// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

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

// function camelize(string) {
//   var splitedStr = string.split('-');

//   for (var i = 1; i < splitedStr.length; i++) {
//     splitedStr[i] = splitedStr[i][0].toUpperCase() + splitedStr[i].slice(1);
//   }

//   string = splitedStr.join('');

//   return string;
// };

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

// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// function returnValue(a) {
//   return a;
// }

// const b = returnValue(134);

// console.log(b);


// High order function
// function sum(a, b) {
//   return a + b;
// }

// function substract(a, b) {
//   return a - b;
// }

// function calculate(a, b, fn) {
//   console.log(typeof fn);
//   console.log(fn.name);

//   const res = fn(a, b);

//   return res;
// }

// const result = calculate(3, 4, sum);

// console.log(result);

// Filter array native realisation of Array.map()

// function myFilter(array, callback) {
//   const filteredArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (callback(array[i], i, array)) {
//       filteredArray.push(array[i]);
//     }
//   }

//   return filteredArray;
// };

// function myOwnFilter(array, cb) {
//   const filteredArray = [];

//   for (let i = 0; i < array.length; i++) {
//     if (cb(array[i], i, array)) {
//       filteredArray.push(cb(array[i], i, array));
//     }
//   }

//   return filteredArray;
// };


/// Function checks if two strings are anagram or not

// function checkAnagram(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let string1 = str1.split('').sort().join('');
//   let string2 = str2.split('').sort().join('');

//   let result = (string1 === string2);

//   return result;
// }


// Function generators
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

// A native realisation of the Array.map()
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


// A random integer in range  between 1 and 10
const randomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// const links = [...document.querySelectorAll('a')];

// Spread operator with DOM nodes;


// IntersectionObserver is the object to trace an element that we need to trace
// const lazyImages = document.querySelectorAll('.lazy-image');

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       console.log('Пользователь почти докрутил до картинки!')

//       entry.target.src = entry.target.dataset.src
//       observer.unobserve(entry.target)
//     }
//   })
// }

// const options = {
//   // root: по умолчанию window,
//   // но можно задать любой элемент-контейнер
//   rootMargin: '0px 0px 75px 0px',
//   threshold: 0,
// }


// const observer = new IntersectionObserver(callback, options);

// console.log(observer);
// const observer = new IntersectionObserver();


// Bubbling of the Event
// Если кликнуть по блокам на демо, то можно увидеть, как событие всплывает вверх к родителям:
// let active
// let counter = 0

// // Обрабатываем событие click на всех <div>
// let divs = Array.from(document.querySelectorAll('div')).reverse()
// for (let i = 0; i < divs.length; ++i) {
//   const isLast = (i + 1 === divs.length)
//   divs[i].addEventListener('click', clickHandlerGenerator(isLast))
// }

// function clickHandlerGenerator(isLast = false) {
//   return function () {
//     let me = this
//     setTimeout(function () {
//       if (active) {
//         active.classList.remove('active')
//       }
//       me.classList.add('active')

//       active = me

//       if (isLast) {
//         setTimeout(function () {
//           active.classList.remove('active')
//           active = undefined
//           counter = 0
//         }, 300)
//       }
//     }, counter * 300)
//     ++counter
//   }
// }

// Find the missing element between two array (Task from Sber interview)
// export function findMissingEl(arr1, arr2) {
//   let index;
//   for (let i = 0; i < arr1.length; i++) {
//     index = arr2.indexOf(arr1[i]);

//     if (index > -1) {
//       arr2.splice(index, 1);
//     } else {
//       return arr1[i];
//     }
//   }
// };

// function capitalizeFirsChar(str) {
//   return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
// }

// function capitalizeFirstChar(string) {
//   return `${string[0].toUpperCase()}${string.slice(1)}`;
// }

// function capitalizeFirsChar(string) {
//   return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
// }

// Задача 1. Разработайте функцию, которая принимает целое число в качестве аргумента и возвращает строку, содержащую это число и слово "компьютер" в нужном склонении по падежам в зависимости от числа. Например, при вводе числа 25 функция должна возвращать "25 компьютеров", для числа 41 — "41 компьютер", а для числа 1048 — "1048 компьютеров".

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

//Задача 2. Написать функцию/метод, которая на вход получает массив положительных целых чисел произвольной длины.Например[42, 12, 18].На выходе возвращает массив чисел, которые являются общими делителями для всех указанных числе.В примере это будет[2, 3, 6].

function returnDivider(arr) { }

// Задача 3. Написать функцию/метод, которая возвращает массив простых чисел в диапазоне (2 числа - минимальное и максимальное) заданных чисел.Например, на вход переданы 2 числа: от 11 до 20(диапазон считается включая граничные значения).

// function returnNumFromRange(min, max) {
//   let result = [];

//   for (let i = min; i <= max; i++) {
//     result.push(i);
//   }

//   return result;
// }

// Задача 4. Написать метод, который в консоль выводит таблицу умножения. На вход метод получает число, до которого выводит таблицу умножения. В консоли должна появиться таблица. Например, если на вход пришло число 5, то получим:

// function createMultiplicationTable(value) {
//   let table = '\n';
//   let maxLength = (value * value).toString().length;

//   for (let i = 0; i <= value; i++) {
//     let tableString = '';

//     for (let j = 0; j <= value; j++) {
//       let product = i * j;
//       let padding = ' '.repeat(maxLength - product.toString().length + 1);
//       tableString += padding + (product || ' ');
//     }

//     table += tableString + '\n';
//   }

//   console.log(table);
// }

// createMultiplicationTable(5);

// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

function validBraces(braces) {
  const stack = [];
  const pairs = { '(': ')', '{': '}', '[': ']', }
  for (let char of braces) {
    if (char in pairs) {
      stack.push(char);
    } else {
      const top = stack.pop()
      if (top === undefined || pairs[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
}