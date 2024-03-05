// Repeat string
// For example
// repeat(“arun”, 3);
// output “arunarunarun”;


function RepeatString(str,n){ 
  if (n === 1 || n < 1 || str.length < 1 ){
    return str;
  }
  let arr = [];
  for(let i=1 ; i <=n ; i++){
     arr.push(str);
  }
  return arr.join("");
}
console.log(RepeatString("",2));