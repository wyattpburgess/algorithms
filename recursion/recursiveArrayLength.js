const recursiveArrayLength = (arr, count) => {
    if (arr.length === 0) {
        return count;
    }
    count += 1;
    arr.pop();
    return recursiveArrayLength(arr, count);
}

console.log(recursiveArrayLength([10,20,30,40,50,60,70,80,90,100], 0));