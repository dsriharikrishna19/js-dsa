// 1. Reverse a string.
function reverseString(value) {
    return Array.from(value).reverse().join("");
}

// 2. Reverse a string without using built-in methods.
function reverseString1(value){
  let str = "";
  for(let i=value.length-1;i>=0;i--) {
    str += value[i];
  }
  return str;
}


console.log(reverseString("hello")); // "olleh"
console.log(reverseString1("hello")); // "olleh"