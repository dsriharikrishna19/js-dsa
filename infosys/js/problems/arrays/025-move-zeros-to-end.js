// 25. Move numeric zeroes to the end while keeping other values in order.
// 1. Using filter and fill
function moveZerosToEnd(values) {
  const nonZeroValues = values.filter(value => value !== 0);
  return [
    ...nonZeroValues,
    ...Array(values.length - nonZeroValues.length).fill(0)
  ];
}

// 2. Using a loop
function moveZerosToEnd2(nums) {
  const result = [];

  for (const num of nums) {
    if (num !== 0) {
      result.push(num);
    }
  }

  for (let i = 0; i <= nums.length - result.length; i++) {
    result.push(0);
  }

  return result;
}

console.log(moveZerosToEnd2([0, 1, 0, 3, 12]));
// [1, 3, 12, 0, 0]


// 3. Using a loop with two pointers
function moveZerosToEnd(nums) {
  let insert = 0;

  // Move all non-zero values to the front
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insert++] = nums[i];
    }
  }

  // Fill the rest with zeros
  while (insert < nums.length) {
    nums[insert++] = 0;
  }

  return nums;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]


// 4. Using a loop with swapping
function moveZerosToEnd(nums) {
  let insert = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[insert], nums[i]] = [nums[i], nums[insert]];
      insert++;
    }
  }

  return nums;
}

console.log(moveZerosToEnd([0, 1, 0, 3, 12])); // [1, 3, 12, 0, 0]