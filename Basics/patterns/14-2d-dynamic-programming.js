// =============================================================================
// PATTERN 14: 2-D DYNAMIC PROGRAMMING (GRID PATHS & SEQUENCE MATCHING)
// =============================================================================
// 🎯 When to use:
// - Unique Paths in grid (dp[r][c] = dp[r-1][c] + dp[r][c-1]).
// - Longest Common Subsequence (match: 1 + diag, mismatch: max(up, left)).
// =============================================================================

// 1. Unique Paths - Time: O(m * n), Space: O(n)
function uniquePaths(m, n) {
    let row = new Array(n).fill(1);
    for (let r = 1; r < m; r++) {
        const newRow = new Array(n).fill(1);
        for (let c = 1; c < n; c++) {
            newRow[c] = newRow[c - 1] + row[c];
        }
        row = newRow;
    }
    return row[n - 1];
}

// 2. Longest Common Subsequence - Time: O(m * n), Space: O(m * n)
function longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}

console.log("Unique Paths 3x7:", uniquePaths(3, 7)); // 28
console.log("LCS of 'abcde' & 'ace':", longestCommonSubsequence("abcde", "ace")); // 3 ("ace")
