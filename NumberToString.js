// Convert number to strings
// for example: convertNumberToString(1)
// output “one”
// convertNumberToString(98)
// output “nineeight”

let stringNum = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};
function numberToString(num) {
   let arr = num.toString().split("");
   let numString = ""
   for(let i=0 ; i < arr.length ; i++){
       numString = numString + stringNum[arr[i]];
   }
   return numString;
}
console.log(numberToString(1900));
