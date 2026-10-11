// =============================================================================
// PATTERN 13: 1-D DYNAMIC PROGRAMMING (DECISION STATES & TRANSITIONS)
// =============================================================================
// 🎯 When to use:
// - Climbing Stairs (dp[i] = dp[i-1] + dp[i-2]).
// - House Robber (dp[i] = max(dp[i-1], dp[i-2] + nums[i])).
// - Coin Change (Unbounded knapsack: min coins to make amount).
// - Longest Increasing Subsequence.
// =============================================================================

// 1. House Robber - Time: O(n), Space: O(1)
function rob(nums) {
    let rob1 = 0, rob2 = 0;
    for (const n of nums) {
        const cur = Math.max(n + rob1, rob2);
        rob1 = rob2;
        rob2 = cur;
    }
    return rob2;
}

// 2. Coin Change - Time: O(amount * coins.length), Space: O(amount)
function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const c of coins) {
            if (i - c >= 0) dp[i] = Math.min(dp[i], dp[i - c] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}

console.log("House Robber [2,7,9,3,1]:", rob([2, 7, 9, 3, 1])); // 12
console.log("Coin Change [1,2,5], amount 11:", coinChange([1, 2, 5], 11)); // 3 (5+5+1)
