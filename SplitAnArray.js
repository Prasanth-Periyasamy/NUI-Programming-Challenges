// Split an string into an array
// For example
// stringSplit(“numenticaui”, 2);
// Output [“nu”, “me”, “nt”, “ic”, “au”, “i];

function splitStringToArray(string, limit) {
  if (
    string.toString().length === 0 ||
    limit <= 0 ||
    typeof limit !== "number"
  ) {
    return [];
  }
  const array = string.toString().split("");
  let result = [];
  for (let i = 0; i < string.toString().length; i += limit) {
    result.push(array.splice(0, limit).join(""));
  }
  return result;
}
console.log(splitStringToArray("numenticaui", 3));
