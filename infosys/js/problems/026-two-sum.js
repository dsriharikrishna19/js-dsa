// 26. Return indices of two values that sum to target, or [] if no pair exists.
function twoSum(numbers, target) {
    const indicesByValue = new Map();

    for (let index = 0; index < numbers.length; index++) {
        const complement = target - numbers[index];

        if (indicesByValue.has(complement)) {
            return [indicesByValue.get(complement), index];
        }

        indicesByValue.set(numbers[index], index);
    }

    return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]