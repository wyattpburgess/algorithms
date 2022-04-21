const stairStepCount = (n) => {
    if (n === null) return null;
    if (n <= 2) return n;
    const solutions = [];
    return getStepOptions(0, n, solutions); 
}

const getStepOptions = (count, n, solutions) => {
    if (count > n) {
        return 0;
    } else if (n - count === 0) {
        return 1;
    }
    if (solutions[count] !== undefined) return solutions[count]; 
    count += getStepOptions(count + 1, n, solutions);
    count += getStepOptions(count + 2, n, solutions);
    count += getStepOptions(count + 3, n, solutions);
    solutions[count] = count;
    return count;
}

console.log(stairStepCount(2));
console.log(stairStepCount(1000));