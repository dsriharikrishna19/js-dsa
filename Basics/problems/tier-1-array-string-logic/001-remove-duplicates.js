// Remove duplicates from an array
// Input:  [1, 2, 2, 3, 1]
// Output: [1, 2, 3]

// 1. Brute Force Approach
// Time: O(n²)
// Space: O(n)

function removeDuplicatesBruteForce(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (!result.includes(nums[i])) {
            result.push(nums[i]);
        }
    }

    return result;
}


// 2. Set Approach
// Time: O(n) average
// Space: O(n)

function removeDuplicatesBetter(nums) {
    return [...new Set(nums)];
}


// 3. Sort + Two Pointer Approach
// Time: O(n log n)
// Space: O(1) auxiliary

function removeDuplicatesOptimal(nums) {
    if (nums.length === 0) {
        return [];
    }

    // Sort the array
    nums.sort((a, b) => a - b);

    // Two pointer
    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return nums.slice(0, k);
}

// Test
const arr = [1, 2, 2, 3, 1];

console.log("Input:", arr);

console.log(
    "Brute Force:",
    removeDuplicatesBruteForce(arr)
);

console.log(
    "Set Approach:",
    removeDuplicatesBetter(arr)
);

console.log(
    "Two Pointer:",
    removeDuplicatesOptimal([...arr])
);