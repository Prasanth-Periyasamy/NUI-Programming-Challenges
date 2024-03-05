// Find sum of multiples
// For example
// findSum(5, 5) should return 5+10+15+20+25=75
// findSum(8, 3) should return 8+16+24=48

function sumOfMultiples(el,n){
  let sum = 0;
  if (n <= 0 || el === 0){
    return 0;
  }
  for(let i = 1; i <= n ; i++){
    sum = sum + el * i
  }
  return sum;
}
console.log(sumOfMultiples(8,3));
