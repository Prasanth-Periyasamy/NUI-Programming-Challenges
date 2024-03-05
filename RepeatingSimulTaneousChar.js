// Find the characters that are repeating the most simaltaneously
// For example:
// charRepeating(“traaainngfornewbie”);
// Output: a
// since a has more repeating simaltaneously

function simultaneousRepeatingChar(str) {
let count = 1;
let maxCount = 1
let char = ""
for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
        count++
        if (maxCount < count) {
            maxCount = count
            char = str[i]
        }
    } else {
        count = 1
    }
} 
   console.log(char,maxCount);
}
simultaneousRepeatingChar("trainngfornewbie");
