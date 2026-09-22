// Q8. Move Zeroes to the End

// Input:  [0, 1, 0, 3, 12]
// Output: [1, 3, 12, 0, 0]


// 1. Brute Force Approach
// Time: O(n)
// Space: O(n)

function moveZeroesBruteForce(nums) {
  const zeros = [];
  const nonZeros = [];

  for(let i = 0; i < nums.length; i++){
    if(nums[i] === 0){
      zeros.push(nums[i]);
    } else {
      nonZeros.push(nums[i]);
    }
  }

  return [...nonZeros, ...zeros];
}


// 2. Better Approach
// Time: O(n)
// Space: O(n)

function moveZeroesBetter(nums) {
  let index = 0;
  const result = [];

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
      result[index] = nums[i];
      index++;
    }
  }

  while(index < nums.length){
    result[index] = 0;
    index++;
  }

  return result;
}


// 3. Optimal Approach
// Time: O(n)
// Space: O(1)

function moveZeroesOptimal(nums) {
  let j = 0;

  for(let i = 0; i < nums.length; i++){
    if(nums[i] !== 0){
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }

  return nums;
}


// Test cases

console.log(moveZeroesBruteForce([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

console.log(moveZeroesBetter([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

console.log(moveZeroesOptimal([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]

console.log(moveZeroesOptimal([1, 2, 3]));
// [1, 2, 3]

console.log(moveZeroesOptimal([0, 0, 0]));
// [0, 0, 0]

console.log(moveZeroesOptimal([1, 0, 2, 0, 3]));
// [1, 2, 3, 0, 0]

console.log(moveZeroesOptimal([0]));
// [0]