// Repeat string
// For example
// repeat(“arun”, 3);
// output “arunarunarun”;

function repeatString(string, repetition) {
  if (
    typeof string !== "string" ||
    typeof repetition !== "number" ||
    repetition < 1 ||
    string.length === 0
  ) {
    return "Invalid input";
  }
  let repeatedString = "";
  for (let i = 1; i <= repetition; i++) {
    repeatedString += string;
  }
  return repeatedString;
}
console.log(repeatString("name", 2));
