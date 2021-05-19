let counter = 0;
// function inception() {
//   if (counter > 3) {
//     return "El karma viene y se va";
//   }
//   counter++;
//   return inception();
// }

// const mensaje = inception();
// console.log(mensaje, "1");

function findFactorialRecursive(number) {
  if (number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

const res1 = findFactorialRecursive(5);
function findFactorialIterative(n) {
  let total = 1;
  for (let i = 1; i <= n; i++) {
    total = total * i;
  }
  return total;
}

const res2 = findFactorialIterative(5);
console.log(res2);
if (res1 === res2) {
  console.log("Puros corridos tumbados eaaaa");
}
// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// function fibonacciIterative(n) {}
// fibonacciIterative(3);
let index = 0;
let start = 0;
let next = 1;
let sum = start + next;
///

function fibonacciRecursive(indexToFind) {
  sum = start + next;
  start = next;
  next = sum;
  index++;
  if (indexToFind === index) {
    return [start];
  } else {
    return fibonacciRecursive(indexToFind);
  }
}

function fibonnaciIterative(indexToFind) {
  for (index = 0; index !== indexToFind; index++) {
    sum = start + next;
    start = next;
    next = sum;
  }
  return [start];
}
function cleanInputs() {
  index = 0;
  start = 0;
  next = 1;
  sum = start + next;
}

// console.log(fibonacciRecursive(3));
// cleanInputs();
// console.log(fibonnaciIterative(3));
// cleanInputs();

function reverseString(stringToReverse) {}
//sexo = oxes
console.log(reverseString("sexo"));
