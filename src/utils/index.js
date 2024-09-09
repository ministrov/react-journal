export function makeBinarySearch(array, x) {
  let start = 0, end = array.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === x) {
      return true;
    } else if(array[mid] < x) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};