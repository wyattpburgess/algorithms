const recursiveMultiply = (n1, n2) => {
    if (n1 === null || n2 === null) return null;
    if (n1 === 0 || n2 === 0) return 0;
    return multiply(n1, n1, n2);
}

const multiply = (orig, num, times) => {
    if (times === 1) {
        return num;
    }
    num += orig
    return multiply(orig, num, times - 1);
}

console.log(recursiveMultiply(9, 9));