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

function myFilter(array, callback) {
  const filteredArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      filtereArray.push(array[i]);
    }
  }

  return filteredArray;
};

