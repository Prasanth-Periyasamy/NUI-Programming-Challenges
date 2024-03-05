// Check Spaces
// checkSpaces(“arun”) output false;
// checkSpaces(“user arun”) output true;

function checkSpaces(str){
  if (!str) return str;
  let array = str.split("");
  if (array.includes(" ")) return true;
  else return false;
}
console.log(checkSpaces("arun"));