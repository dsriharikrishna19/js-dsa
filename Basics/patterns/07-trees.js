// =============================================================================
// PATTERN 07: TREES (DFS RECURSION & BFS LEVEL-ORDER)
// =============================================================================
// 🎯 When to use:
// - DFS for height, subtree symmetry, path sum, LCA, BST validation.
// - BFS (Queue) for level-by-level processing, right side view, shortest depth.
// =============================================================================

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// 1. Invert Binary Tree - Time: O(n), Space: O(h)
function invertTree(root) {
    if (!root) return null;
    const temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    return root;
}

// 2. Validate Binary Search Tree - Time: O(n), Space: O(h)
function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}

// 3. Level Order Traversal (BFS) - Time: O(n), Space: O(n)
function levelOrder(root) {
    if (!root) return [];
    const queue = [root], res = [];
    while (queue.length) {
        const size = queue.length, level = [];
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(level);
    }
    return res;
}

const t = new TreeNode(4, new TreeNode(2), new TreeNode(7));
console.log("Level Order of [4, 2, 7]:", levelOrder(t)); // [ [4], [2, 7] ]
console.log("Is Valid BST?", isValidBST(t)); // true
