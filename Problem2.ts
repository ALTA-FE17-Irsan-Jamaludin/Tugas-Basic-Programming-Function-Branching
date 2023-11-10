// Problem 2 - Exponentiation
// Given two integers x and n, write a function to compute x^n.
// Sample Test Cases
// Input : x = 2, n = 3
// Output : 8

const exponentiation = (x: number, n: number): number | string | void => {
  if (n < 0) {
    return "Wrong Input";
  } else if (n === 0) {
    return 1;
  } else {
    return x ** n;
  }
};

console.log(exponentiation(2, 3)); // 8
console.log(exponentiation(2, 12)); // 4096
console.log(exponentiation(7, 2)); // 49
console.log(exponentiation(9, 3)); // 729
console.log(exponentiation(22, 5)); // 5153632
console.log(exponentiation(1996, 0)); // 1
console.log(exponentiation(4213, -3)); // “wrong input”
