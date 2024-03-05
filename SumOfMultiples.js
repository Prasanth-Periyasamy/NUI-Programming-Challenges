// Find sum of multiples
// For example
// findSum(5, 5) should return 5+10+15+20+25=75
// findSum(8, 3) should return 8+16+24=48

function findSumOfMultiples(element, limit) {
  if(typeof(element) !== "number" || typeof(limit) !== "number") return 0;
  if (limit <= 0 || element === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 1; i <= limit; i++) {
    sum += element * i;
  }
  return sum;
}
console.log(findSumOfMultiples(4,2));