// 21. Return a reversed copy without changing the input array.
// 1. Using reverse
function reverseArray1(values) {
    return [...values].reverse();
}

// 2. Using a loop + two pointers
function reverseArray2(nums) {
    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        [nums[l], nums[r]] = [nums[r], nums[l]]
        l++;
        r--
    }

    return nums;
}

//for loop
function reverseArray3(nums) {
    let result = [];

    for (let i = nums.length - 1; i >= 0; i--) {
        result.push(nums[i]);
    }

    return result;
}

console.log(reverseArray1([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray2([1, 2, 3])); // [3, 2, 1]
console.log(reverseArray3([1, 2, 3])); // [3, 2, 1]
