// Find the sum of even numbers in an array. find all the even numbers in an array and add them
// For example
// findEvenSum([38, 3, 2, 8, 31])
// output -  48

const array = [1, 2, 2, -10, "2", "hi",-0.1];
function findSumOfEvenNumbers(array) {
  if (array.length === 0) return 0;
  return array
    .filter((value) => typeof(value) === "number" && value % 2 === 0)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
console.log(findSumOfEvenNumbers(array));
