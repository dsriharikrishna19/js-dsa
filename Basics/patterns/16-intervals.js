// =============================================================================
// PATTERN 16: INTERVALS (SORT BY START TIME & OVERLAP MERGING)
// =============================================================================
// 🎯 When to use:
// - Merge Intervals, Insert Interval.
// - Meeting Rooms I & II, Non-overlapping intervals.
// =============================================================================

// 1. Merge Intervals - Time: O(n log n), Space: O(n)
function mergeIntervals(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const prev = merged[merged.length - 1];
        if (intervals[i][0] <= prev[1]) {
            prev[1] = Math.max(prev[1], intervals[i][1]); // Overlap!
        } else {
            merged.push(intervals[i]);
        }
    }
    return merged;
}

// 2. Meeting Rooms (Can attend all?) - Time: O(n log n), Space: O(1)
function canAttendMeetings(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < intervals[i - 1][1]) return false;
    }
    return true;
}

console.log("Merged Intervals:", mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1,6],[8,10],[15,18]]
console.log("Can attend meetings [[0,30],[5,10],[15,20]]?", canAttendMeetings([[0, 30], [5, 10], [15, 20]])); // false
