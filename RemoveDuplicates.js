// Remove duplicates in an array
// For example: [1, “two”, “two”, 3, “two”];
// output [1, “two”, 3]

function RemoveDuplicates(arr){
 if ( arr.length < 2 ) return arr;
 let obj = {}
 for (let i = 0 ; i < arr.length ; i++){
    let el = arr[i];
    if(obj[el]){
        obj[el] = obj[el] + 1
    }else{
       obj[el] = 1
    }
}
  let noDuplicates = [];
  for (let i in obj){
    noDuplicates.push(i)
  }
  return noDuplicates
}
console.log(RemoveDuplicates([1,"two", "two", 3,"two"]))

// Aliter
let noDuplicates = [... new Set([])];
console.log(noDuplicates);