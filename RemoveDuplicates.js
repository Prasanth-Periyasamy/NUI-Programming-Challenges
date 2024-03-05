// Remove duplicates in an array
// For example: [1, “two”, “two”, 3, “two”];
// output [1, “two”, 3]

function removeDuplicatesFromArray(array) {
  if (array.length < 2) return array;
  let frequencyCount = {};
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (frequencyCount[item]) {
      frequencyCount[item]++;
    } else {
      frequencyCount[item] = 1;
    }
  }
  let uniqueArray = [];
  for (let key in frequencyCount) {
    uniqueArray.push(key);
  }
  return uniqueArray;
}
console.log(removeDuplicatesFromArray([1, "two", "two", 3, "two"]));
