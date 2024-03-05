// Check Spaces
// checkSpaces(“arun”) output false;
// checkSpaces(“user arun”) output true;

function hasSpaces(string) {
  if (typeof string !== "string" || string.length === 0) {
    return "Invalid input";
  }
  const array = string.split("");
  if (array.includes(" ")) return true;
  else return false;
}
console.log(hasSpaces("ar un"));
