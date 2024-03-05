// Write a javascript function to return number of occurance of a particular word in a sentence
// For example:
// findNumberOfOccurance(“be kind whenever possible. kindness is what matters”, “kind”);
// Will return an output of 2 ( 2 occurance of kind in the string )

function NoOfOcuurence(str,findStr){
 let arr = str.split(" ");
 let count = 0;
 for (let i = 0 ; i < arr.length ; i++){
    if (arr[i].includes(findStr)){
         count++
    }
}
return count
}
console.log(NoOfOcuurence("be kind whenever matter possible. kindness is what matters","kind"));