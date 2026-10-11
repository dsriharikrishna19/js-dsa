// =============================================================================
// BINARY SEARCH TREE (BST) IMPLEMENTATION & TRAVERSALS IN JAVASCRIPT
// =============================================================================

// -----------------------------------------------------------------------------
// 1. TREE NODE DEFINITION
// -----------------------------------------------------------------------------
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// -----------------------------------------------------------------------------
// 2. BINARY SEARCH TREE CLASS
// -----------------------------------------------------------------------------
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // Insert a value into BST - Average O(log n), Worst O(n)
    insert(val) {
        const newNode = new TreeNode(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }

        let current = this.root;
        while (true) {
            if (val === current.val) return undefined; // Duplicates not allowed in strict BST
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }

    // Search for a value in BST - Average O(log n), Worst O(n)
    contains(val) {
        if (!this.root) return false;
        let current = this.root;
        while (current) {
            if (val === current.val) return true;
            if (val < current.val) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    // -------------------------------------------------------------------------
    // 3. TREE TRAVERSALS (DFS: PreOrder, InOrder, PostOrder | BFS: LevelOrder)
    // -------------------------------------------------------------------------

    // 3.1 DFS In-Order (Left, Root, Right) -> Yields values in sorted order!
    inOrder(node = this.root, result = []) {
        if (node) {
            this.inOrder(node.left, result);
            result.push(node.val);
            this.inOrder(node.right, result);
        }
        return result;
    }

    // 3.2 DFS Pre-Order (Root, Left, Right) -> Useful for cloning/serialization
    preOrder(node = this.root, result = []) {
        if (node) {
            result.push(node.val);
            this.preOrder(node.left, result);
            this.preOrder(node.right, result);
        }
        return result;
    }

    // 3.3 DFS Post-Order (Left, Right, Root) -> Useful for bottom-up computation
    postOrder(node = this.root, result = []) {
        if (node) {
            this.postOrder(node.left, result);
            this.postOrder(node.right, result);
            result.push(node.val);
        }
        return result;
    }

    // 3.4 BFS Level-Order (Breadth-First using Queue)
    levelOrder() {
        if (!this.root) return [];
        const result = [];
        const queue = [this.root];

        while (queue.length > 0) {
            const current = queue.shift();
            result.push(current.val);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        return result;
    }

    // 3.5 Calculate Max Depth / Height of Tree
    maxDepth(node = this.root) {
        if (!node) return 0;
        return 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
    }
}

// -----------------------------------------------------------------------------
// Testing BST
// -----------------------------------------------------------------------------
// Structure:
//        10
//       /  \
//      5    15
//     / \     \
//    2   7     20
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(20);

console.log("In-Order (Sorted):", bst.inOrder());     // [2, 5, 7, 10, 15, 20]
console.log("Pre-Order:", bst.preOrder());           // [10, 5, 2, 7, 15, 20]
console.log("Post-Order:", bst.postOrder());         // [2, 7, 5, 20, 15, 10]
console.log("Level-Order (BFS):", bst.levelOrder()); // [10, 5, 15, 2, 7, 20]
console.log("Max Depth:", bst.maxDepth());           // 3
console.log("Contains 7?", bst.contains(7));         // true
console.log("Contains 99?", bst.contains(99));       // false
