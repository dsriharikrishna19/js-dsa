// 3. Count English vowels in a string.
// 1.built-in methods regex
function countVowels(value) {
    const matches = value.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

// 2.without using built-in methods
function countVowels2(val){
  let c = 0;
  for(let i=0;i<val.length;i++){
    let ch = val[i].toLowerCase();
    if(ch === "a"|| ch === "e"|| ch === "i"|| ch === "o"|| ch=== "u" ){
      c++;
    }    
  }
  return c;

}

console.log(countVowels("JavaScript")); // 3
console.log(countVowels2("JavaScript")); // 3
