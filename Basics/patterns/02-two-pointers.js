// =============================================================================
// PATTERN 02: TWO POINTERS (CONVERGING & FAST/SLOW)
// =============================================================================
// 🎯 When to use:
// - Working with SORTED arrays or strings.
// - Finding pairs or triplets meeting sum criteria (Two Sum II, 3Sum).
// - Palindrome validation (moving left & right inward).
// - In-place array partitions or deduplication (Fast & Slow pointers).
// =============================================================================

// 1. Valid Palindrome (Converging Pointers) - Time: O(n), Space: O(1)
function isPalindrome(s) {
    let l = 0, r = s.length - 1;
    const isAlpha = ch => /[a-z0-9]/i.test(ch);
    while (l < r) {
        while (l < r && !isAlpha(s[l])) l++;
        while (l < r && !isAlpha(s[r])) r--;
        if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
        l++; r--;
    }
    return true;
}

// 2. Two Sum II - Input Array Sorted - Time: O(n), Space: O(1)
function twoSumSorted(numbers, target) {
    let l = 0, r = numbers.length - 1;
    while (l < r) {
        const sum = numbers[l] + numbers[r];
        if (sum === target) return [l + 1, r + 1];
        sum < target ? l++ : r--;
    }
    return [];
}

// 3. 3Sum (Sort + Two Pointers) - Time: O(n²), Space: O(1)
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates
        let l = i + 1, r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) l++;
                while (l < r && nums[r] === nums[r - 1]) r--;
                l++; r--;
            } else if (sum < 0) l++;
            else r--;
        }
    }
    return res;
}

console.log("Is Palindrome:", isPalindrome("A man, a plan, a canal: Panama")); // true
console.log("Two Sum Sorted ([2,7,11,15], target 9):", twoSumSorted([2, 7, 11, 15], 9)); // [1, 2]
console.log("3Sum:", threeSum([-1, 0, 1, 2, -1, -4]));
