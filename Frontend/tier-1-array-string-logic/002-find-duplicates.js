// Find duplicate elements in an array
// Input:  [1, 2, 3, 2, 4, 5, 1]
// Output: [2, 1]

// 1. Brute Force Approach
// Time: O(n²)
// Space: O(n)
function findDuplicatesBruteForce(nums) {
    // Write your solution here
    const n = nums.length;
    duplicates = [];

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                if (!duplicates.includes(nums[i])) {
                    duplicates.push(nums[i])
                }
            }
        }
    }

    return duplicates;
}

// 2. Better Approach
// Time: O(n)
// Space: O(n)
function findDuplicatesBetter(nums) {
    const seen = new Set();
    const duplicates = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!seen.has(nums[i])) {
            seen.add(nums[i])
        } else {
            duplicates.add(nums[i])
        }
    }

    return [...duplicates];
}

// 3. Optimal Approach
// Time: O(n)
// Space: O(n)
function findDuplicatesOptimal(nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]);

        if (nums[index] > 0) {
            nums[index] = -nums[index]
        } else {
            if (!result.includes(index)) {
                result.push(index)
            }
        }
    }

    return result;
}


// Test
const arr = [1, 2, 2, 2, 3];

console.log("Input:", arr);

console.log(
    "Brute Force:",
    findDuplicatesBruteForce(arr)
);

console.log(
    "Better Approach:",
    findDuplicatesBetter(arr)
);

console.log(
    "Optimal Approach:",
    findDuplicatesOptimal(arr)
);