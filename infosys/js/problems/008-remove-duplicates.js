// 8. Remove duplicates while preserving the original order.
// 1. Using Set
function removeDuplicates(values) {
    return [...new Set(values)];
}

// 2. Using a loop
function removeDuplicates1(values) {
  const result = [];

  for (const num of values) {
    if (!result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(removeDuplicates([1, 2, 2, 3, 1]));  // [1, 2, 3]
console.log(removeDuplicates1([1, 2, 2, 3, 1])); // [1, 2, 3]