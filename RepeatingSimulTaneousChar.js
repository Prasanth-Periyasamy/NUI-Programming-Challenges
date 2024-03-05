// Find the characters that are repeating the most simaltaneously
// For example:
// charRepeating(“traaainngfornewbie”);
// Output: a
// since a has more repeating simaltaneously

function simultaneousRepeatingChar(string) {
  let count = 1;
  let maxCount = 1;
  let character = "";
  for (let i = 0; i < string.length - 1; i++) {
    if (string[i] === string[i + 1]) {
      count++;
      if (maxCount < count) {
        maxCount = count;
        character = string[i];
      }
    } else {
      count = 1;
    }
  }
  return character;
}
console.log(simultaneousRepeatingChar("traaainngfornewbie"));
