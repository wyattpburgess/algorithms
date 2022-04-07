const merge = (arr1, arr2) => {
    const mergedArray = [];
    let i1 = 0;
    let i2 = 0;
    while (i1 < arr1.length && i2 < arr2.length) {
        if (arr1[i1] < arr2[i2]) {
            mergedArray.push(arr1[i1++]);
        } else {
            mergedArray.push(arr2[i2++]);
        }
    }

    while (i1 < arr1.length) {
        mergedArray.push(arr1[i1++]);
    }

    while (i2 < arr2.length) {
        mergedArray.push(arr2[i2++]);
    }
    
    return mergedArray;
}

const mergeSort = (arr) => {
    // base case
    if (arr.length <= 1) {
        return arr;
    }
    const leftArrayLen = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, leftArrayLen);
    const rightArr = arr.slice(leftArrayLen);

    const mergeSortedArray = merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    );

    return mergeSortedArray;
}

const arrayToSort = [1, 5, 2, 3, 10, 100, 50, 29];
const sortedArray = mergeSort(arrayToSort);
console.log(sortedArray);

//        [1, 5, 2, 3, 10, 100, 50, 29];
//      [1, 5, 2, 3]  ---- [10, 100, 50, 29]
//    [1, 5] -- [2,3]  ---  [10,100] -- [50, 29]
// [1] - [5] - [2] - [3] - [10] - [100] - [50] - [29]
