const binarySearch = (list, item) => {
  console.log("Searching for: " + item + " in list of length " + list.length);
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
};

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const guessFive = binarySearch(sortedArray, 5);
console.log(guessFive);

const guessFalse = binarySearch(sortedArray, -1);
console.log(guessFalse);
