// =============================================================================
// PATTERN 03: SLIDING WINDOW (CONTIGUOUS SUBARRAYS & SUBSTRINGS)
// =============================================================================
// 🎯 When to use:
// - Longest / shortest substring or subarray satisfying a constraint.
// - Fixed size window k (Max sum subarray of size k).
// - Dynamic size window (Longest substring without repeating characters).
// =============================================================================

// 1. Best Time to Buy and Sell Stock (Dynamic Window) - Time: O(n), Space: O(1)
function maxProfit(prices) {
    let buy = 0, maxP = 0;
    for (let sell = 1; sell < prices.length; sell++) {
        if (prices[sell] > prices[buy]) {
            maxP = Math.max(maxP, prices[sell] - prices[buy]);
        } else {
            buy = sell;
        }
    }
    return maxP;
}

// 2. Longest Substring Without Repeating Characters - Time: O(n), Space: O(min(n, alphabet))
function lengthOfLongestSubstring(s) {
    const map = new Map();
    let left = 0, maxLen = 0;
    for (let right = 0; right < s.length; right++) {
        const ch = s[right];
        if (map.has(ch) && map.get(ch) >= left) {
            left = map.get(ch) + 1;
        }
        map.set(ch, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

console.log("Max Stock Profit [7,1,5,3,6,4]:", maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log("Longest Non-Repeating Substring 'abcabcbb':", lengthOfLongestSubstring("abcabcbb")); // 3
