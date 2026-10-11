// =============================================================================
// PATTERN 05: BINARY SEARCH (STANDARD & ROTATED SORTED ARRAYS)
// =============================================================================
// 🎯 When to use:
// - Finding target in sorted array in O(log n) time.
// - Search in Rotated Sorted Array.
// - Find Minimum in Rotated Sorted Array.
// - Binary search on answer space (monotonic condition).
// =============================================================================

// 1. Search in Rotated Sorted Array - Time: O(log n), Space: O(1)
function searchRotated(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] === target) return mid;
        // Left half is normally sorted:
        if (nums[l] <= nums[mid]) {
            if (target >= nums[l] && target < nums[mid]) r = mid - 1;
            else l = mid + 1;
        } else { // Right half is normally sorted:
            if (target > nums[mid] && target <= nums[r]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
}

// 2. Find Minimum in Rotated Sorted Array - Time: O(log n), Space: O(1)
function findMinRotated(nums) {
    let l = 0, r = nums.length - 1;
    while (l < r) {
        const mid = Math.floor(l + (r - l) / 2);
        if (nums[mid] > nums[r]) l = mid + 1;
        else r = mid;
    }
    return nums[l];
}

console.log("Search 0 in [4,5,6,7,0,1,2]:", searchRotated([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log("Min in [4,5,6,7,0,1,2]:", findMinRotated([4, 5, 6, 7, 0, 1, 2])); // 0
