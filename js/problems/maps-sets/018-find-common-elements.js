// 18. Return unique values present in both arrays, preserving the first array's order.
// 1. Using Set + filter
function findCommonElements1(first, second) {
    const result = new Set(second);
    return [...new Set(first)].filter(value => result.has(value));
}

// 2. Using a loop
function findCommonElements2(first, second) {
  const result = [];

  for(let i=0;i<first.length;i++){
    for(let j=0;j<second.length;j++){
      if(first[i] === second[j]){
        if(!result.includes(first[i])){
          result.push(first[i]);
        }
      }
    }
  }
  return result;
}

console.log(findCommonElements1([1, 2, 2, 3], [2, 3, 4])); // [2, 3]
console.log(findCommonElements2([1, 2, 2, 3], [2, 3, 4])); // [2, 3]