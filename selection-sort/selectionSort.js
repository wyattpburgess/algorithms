const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIdx = 0;
  arr.forEach((val, idx) => {
    if (val < smallest) {
      smallest = val;
      smallestIdx = idx;
    }
  });
  return smallestIdx;
};

const selectionSort = (arr) => {
  const newArr = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    let smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }
  return newArr;
};

console.log(selectionSort([5, 4, 10, 6, 2, 7]));
console.log(selectionSort([20, 40, 12, 7, 8, 2, 201, 400, 5]));
