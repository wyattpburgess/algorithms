const recursiveSum = (arr, total) => {
    if (arr.length === 0) {
        return total;
    }
    // use pop for O(1)
    const lastItem = arr.pop();
    total += lastItem;
    return recursiveSum(arr, total);
}

console.log(recursiveSum([1, 10, 100], 0));