// Write a javascript function to return number of occurance of a particular word in a sentence
// For example:
// findNumberOfOccurance(“be kind whenever possible. kindness is what matters”, “kind”);
// Will return an output of 2 ( 2 occurance of kind in the string )

function findNumberOfOccurance(sentence, word) {
  const array = sentence.toString().toLowerCase().split(" ");
  let count = 0;
  const regex = new RegExp(`${word}`, "ig");
  for (let i = 0; i < array.length; i++) {
    if (array[i].includes(word.toLowerCase())) {
      const countArray = array[i].match(regex); // returns as array of strings matched , if not matched returns null
      if (countArray) {
        count += countArray.length;
      }
    }
  }
  return count;
}
console.log(findNumberOfOccurance(99, "kind"));
