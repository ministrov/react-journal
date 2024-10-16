// import { makeBinarySearch } from './utils';

// let arr = [2, 3, 4, 10, 40, 56, 123, 345];
// let x = 12;

// if (makeBinarySearch(arr, x)) {
//   console.log('Element found!');
// } else {
//   console.log('Element not found!');
// }

export function makeBinarySearch(array, x) {
  let start = 0, end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === x) {
      return true;
    } else if (array[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}


export default function doBinarySearch(numbers, x) {
  let startIndex = 0, endIndex = numbers.length - 1;

  while (startIndex <= endIndex) {
    let mid = Math.floor((startIndex + endIndex) / 2);

    if (numbers[mid] === x) {
      return true;
    } else if (numbers[mid] < x) {
      startIndex = mid + 1;
    } else {
      endIndex = mid - 1;
    }
  }

  return false;
}

// const array = ['1', '1', '2', '2', '3', '4', '4', '5', '5'];

// const getUniqueFrequency = (arr) => {
//   let result = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (result[arr[i]]) {
//       result[arr[i]] = result[arr[i]] + 1;
//     } else {
//       result[arr[i]] = 1;
//     }
//   }
//   // for (const num of arr) {
//   //   result[num] = result[num] ? result[num] + 1 : 1;
//   // }

//   return result;
// };

// console.log(getUniqueFrequency(array));

// const array = ['1', '1', '2', '2', '3', '4', '4', '5', '5'];

// const frequency = array.reduce((acc, item) => {
//   acc[item] = (acc[item] || 0) + 1;
//   return acc;
// }, {});

// console.log(frequency);