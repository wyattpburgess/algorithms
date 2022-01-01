const factorial = (x) => {
  if (x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
};

console.log(factorial(3));
console.log(factorial(10));
