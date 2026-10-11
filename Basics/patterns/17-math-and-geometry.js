// =============================================================================
// PATTERN 17: MATH & GEOMETRY (MATRIX ROTATION & SPIRAL TRAVERSAL)
// =============================================================================
// 🎯 When to use:
// - Rotate Image 90° clockwise in-place (Transpose + Reverse rows).
// - Spiral Matrix (4 boundary pointers: top, bottom, left, right).
// - Set Matrix Zeroes (in-place markers).
// =============================================================================

// 1. Rotate Image (90 deg clockwise) - Time: O(n²), Space: O(1)
function rotateImage(matrix) {
    const n = matrix.length;
    // Transpose: swap matrix[i][j] and matrix[j][i]
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse each row
    for (let i = 0; i < n; i++) matrix[i].reverse();
    return matrix;
}

// 2. Spiral Order - Time: O(m * n), Space: O(1)
function spiralOrder(matrix) {
    const res = [];
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    while (top <= bottom && left <= right) {
        for (let c = left; c <= right; c++) res.push(matrix[top][c]);
        top++;
        for (let r = top; r <= bottom; r++) res.push(matrix[r][right]);
        right--;
        if (top <= bottom) {
            for (let c = right; c >= left; c--) res.push(matrix[bottom][c]);
            bottom--;
        }
        if (left <= right) {
            for (let r = bottom; r >= top; r--) res.push(matrix[r][left]);
            left++;
        }
    }
    return res;
}

console.log("Spiral Matrix:", spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]])); // [1,2,3,6,9,8,7,4,5]
