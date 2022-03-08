const recursiveSum = (arr, total) => {
    if (arr.length === 0) {
        return total;
    }
    // use pop for O(1)
    total += arr.pop();
    return recursiveSum(arr, total);
}

console.log(recursiveSum([1,2,3,4], 0));