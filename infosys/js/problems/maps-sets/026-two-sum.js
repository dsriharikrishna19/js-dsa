// 26. Return indices of two values that sum to target, or [] if no pair exists.
function twoSum(numbers, target) {
    const result = new Map();

    for (let i = 0; i < numbers.length; i++) {
        const complement = target - numbers[i];

        if (result.has(complement)) {
            return [result.get(complement), i]
        }

        result.set(numbers[i], i)
    }

    return [];
}

function twoSumBruteForce(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSumBruteForce([2, 7, 11, 15], 9)); // [0, 1]