// Find the missing number in an array
//
// Input:  [1, 2, 3, 5]
// Output: 4
//
// Constraint:
// Array contains numbers from 1 to n
// Exactly one number is missing.


// 1. Brute Force Approach
// Time: O(n²)
// Space: O(1)

function findMissingBruteForce(nums) {
    const n = nums.length + 1;

    for (let i = 1; i <= n; i++) {

        let found = false;

        for (let j = 0; j < nums.length; j++) {

            if (nums[j] === i) {
                found = true;
                break;
            }
        }

        if (!found) {
            return i;
        }
    }
}


// 2. Better Approach
// Time: O(n)
// Space: O(1)

function findMissingBetter(nums) {
    const n = nums.length + 1;
    const originalSum = n * (n + 1) / 2;

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    return originalSum - sum;
}


// 3. Optimal Approach — XOR
// Time: O(n)
// Space: O(1)

function findMissingOptimal(nums) {
    const n = nums.length + 1;

    let xor = 0;

    // XOR all numbers from 1 to n
    for (let i = 1; i <= n; i++) {
        xor ^= i;
    }

    // XOR all numbers in the array
    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i];
    }

    return xor;
}


// Normal Test

const arr = [1, 2, 3, 5];

console.log("Input:", arr);

console.log(
    "Brute Force:",
    findMissingBruteForce([...arr])
);

console.log(
    "Better Approach:",
    findMissingBetter([...arr])
);

console.log(
    "Optimal Approach:",
    findMissingOptimal([...arr])
);


// Edge Cases

// Missing first number
console.log(
    "Missing First:",
    findMissingOptimal([2, 3, 4, 5])
);

// Missing last number
console.log(
    "Missing Last:",
    findMissingOptimal([1, 2, 3, 4])
);

// Missing middle
console.log(
    "Missing Middle:",
    findMissingOptimal([1, 2, 3, 5])
);

// Only one number
console.log(
    "Single Element:",
    findMissingOptimal([1])
);

// Unordered array
console.log(
    "Unordered:",
    findMissingOptimal([3, 1, 4, 2])
);