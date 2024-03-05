// Convert number to strings
// for example: convertNumberToString(1)
// output “one”
// convertNumberToString(98)
// output “nineeight”

let digitToString = {
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
function numberToString(number) {
  if (typeof number !== "number") {
    return "Invalid input";
  }
  const array = number.toString().split("");
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += digitToString[array[i]];
  }
  return result;
}
console.log(numberToString(1900));
