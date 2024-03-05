// Split an string into an array
// For example
// stringSplit(“numenticaui”, 2);
// Output [“nu”, “me”, “nt”, “ic”, “au”, “i];

function splitString(str, n) {
  let arr = str.split("");
  let newArr = [];
  for (let i = 0; i < str.length; i = i + n) {
    const spliced = arr.splice(0, n);
    newArr.push(spliced.join(""));
  }
  return newArr;
}
console.log(splitString("numenticaui", 3));
