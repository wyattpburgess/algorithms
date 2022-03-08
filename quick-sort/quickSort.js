const quickSort = (arr) => {
    if (arr.length <= 1) {
        return arr;
    }
    const pivot = arr[0];
    const lessThan = [];
    const greaterThan = [];
    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? lessThan.push(arr[i]) : greaterThan.push(arr[i]);
    }
    return quickSort(lessThan).concat(pivot, quickSort(greaterThan));
}

const unsorted = [23, 45, 16, 37, 3, 99, 22];
const sorted = quickSort(unsorted);
console.log(sorted);
console.log(quickSort([10,5,2]));