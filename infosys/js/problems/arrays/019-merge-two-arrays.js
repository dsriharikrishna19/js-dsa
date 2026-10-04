// 19. Merge two arrays into a new array.
// 1. Using spread operator
function mergeArrays1(first, second) {
    return [...first, ...second];
}
// 2. Using a loop
function mergeArrays2(first, second) {
  const result = [];

  for(const num of first){
    result.push(num)
  }

  for(const num of second){
        result.push(num)
  }

  return result;
}

console.log(mergeArrays1([1, 2], [3, 4])); // [1, 2, 3, 4]
console.log(mergeArrays2([1, 2], [3, 4])); // [1, 2, 3, 4]