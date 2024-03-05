// Find the sum of even numbers in an array. find all the even numbers in an array and add them
// For example
// findEvenSum([38, 3, 2, 8, 31])
// output -  48

let array = [1, 2, 2, -10];
let evenSum = array
  .filter((el) => el % 2 === 0)
  .reduce((acc, cur) => acc + cur, 0);
console.log(evenSum);
