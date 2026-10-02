// 11. Return the sum of all array elements.
// 1. Using reduce
function sumArray(numbers) {
    return numbers.reduce((sum, value) => sum + value, 0);
}

console.log(sumArray([1, 2, 3, 4])); // 10

// 2. Using a loop
function sumArray2(numbers) {
  let sum = 0;
    for (const value of numbers) {
        sum += value;
    }
    return sum;
}

console.log(sumArray2([1, 2, 3, 4])); // 10