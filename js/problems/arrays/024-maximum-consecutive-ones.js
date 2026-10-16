// 24. Find the longest run of consecutive 1 values in a binary array.
function maximumConsecutiveOnes(numbers) {
    let longest = 0;
    let current = 0;

    for (const value of numbers) {
        if (value === 1) {
            current++;
            longest = Math.max(longest, current);
        } else {
            current = 0;
        }
    }

    return longest;
}

console.log(maximumConsecutiveOnes([1, 1, 0, 1, 1, 1])); // 3