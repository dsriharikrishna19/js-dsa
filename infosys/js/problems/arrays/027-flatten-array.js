// 27. Flatten nested arrays to any depth without modifying the input.
// 1. Using built-in methods
function flattenArray(values) {
    return values.flat(Infinity);
}



// 2. Using recursion
function flattenArray(values) {
    const flattened = [];

    if(Array.isArray(values)){
      for(const value of values){
         flattened.push(...flattenArray(value))
      }
    } else {
        flattened.push(values)
    }
    
    return flattened;
}

console.log(flattenArray([1, [2, [3, 4]], 5]));
// [1, 2, 3, 4, 5]
console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]