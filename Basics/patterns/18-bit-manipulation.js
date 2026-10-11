// =============================================================================
// PATTERN 18: BIT MANIPULATION (XOR CANCEL & KERNIGHAN'S TRICK)
// =============================================================================
// 🎯 When to use:
// - Single Number (XOR pairs cancel: a ^ a = 0).
// - Number of 1 Bits (n & (n - 1) clears lowest set bit in O(1)).
// - Power of Two (n > 0 && (n & (n - 1)) === 0).
// - Counting Bits, Missing Number in [0, n].
// =============================================================================

// 1. Single Number (Find unique among duplicate pairs) - Time: O(n), Space: O(1)
function singleNumber(nums) {
    let res = 0;
    for (const n of nums) res ^= n;
    return res;
}

// 2. Number of 1 Bits (Hamming Weight) - Time: O(set bits count), Space: O(1)
function hammingWeight(n) {
    let count = 0;
    while (n !== 0) {
        n = n & (n - 1); // Clears the lowest set bit!
        count++;
    }
    return count;
}

// 3. Missing Number in [0, n] - Time: O(n), Space: O(1)
function missingNumber(nums) {
    let xor = 0;
    for (let i = 0; i <= nums.length; i++) xor ^= i;
    for (const n of nums) xor ^= n;
    return xor;
}

console.log("Single Number in [4, 1, 2, 1, 2]:", singleNumber([4, 1, 2, 1, 2])); // 4
console.log("Number of 1s in 11 (1011):", hammingWeight(11)); // 3
console.log("Missing Number in [3, 0, 1]:", missingNumber([3, 0, 1])); // 2
