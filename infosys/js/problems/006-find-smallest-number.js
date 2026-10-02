// 6. Find the smallest number in an array. Returns undefined for an empty array.
function findSmallest(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }

    return numbers.reduce((smallest, value) => value < smallest ? value : smallest);
}

console.log(findSmallest([4, 9, 2, 7])); // 2

function findSmallest2(nums){
  if(nums.length === 0){
    return;
  }
  let min = nums[0];
  for(const num of nums){
    if(num < min){
      min = num
    }
  }
  return min;
}

console.log(findSmallest([4, 9, 2, 7]));
console.log(findSmallest2([4, 9, 2, 7]));