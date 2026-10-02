// 10. Find the missing number from the range 0 through n (one number is missing).
function findMissingNumber(numbers) {
    const expectedSum = numbers.length * (numbers.length + 1) / 2;
    const actualSum = numbers.reduce((sum, value) => sum + value, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([3, 0, 1])); // 2