// =============================================================================
// PREDEFINED STACK & QUEUE IN JAVASCRIPT (USING ARRAY METHODS)
// =============================================================================

// -----------------------------------------------------------------------------
// PART 1: STACK (LIFO - Last In, First Out)
// Operations: push() to add to top, pop() to remove from top, peek to view top
// -----------------------------------------------------------------------------
const stack = [];

// 1. Push element onto stack - O(1)
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Stack after pushes:", stack); // [10, 20, 30]

// 2. Peek top element - O(1)
const peekTop = stack[stack.length - 1];
console.log("Stack top (peek):", peekTop); // 30

// 3. Pop element from stack - O(1)
const poppedItem = stack.pop();
console.log("Popped from stack:", poppedItem); // 30
console.log("Stack after pop:", stack); // [10, 20]

// 4. isEmpty check
const isStackEmpty = stack.length === 0;
console.log("Is stack empty?", isStackEmpty); // false

// Common Stack Pattern: Valid Parentheses Check
function isValidParentheses(s) {
    const st = [];
    const map = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (char === '(' || char === '{' || char === '[') {
            st.push(char);
        } else if (map[char]) {
            if (st.pop() !== map[char]) return false;
        }
    }
    return st.length === 0;
}
console.log("Valid '()[]{}'?", isValidParentheses("()[]{}")); // true
console.log("Valid '(]'?", isValidParentheses("(]")); // false


// -----------------------------------------------------------------------------
// PART 2: QUEUE (FIFO - First In, First Out)
// Operations: push() to enqueue at tail, shift() to dequeue from head
// -----------------------------------------------------------------------------
const queue = [];

// 1. Enqueue (add to back) - O(1)
queue.push("User A");
queue.push("User B");
queue.push("User C");
console.log("Queue after enqueue:", queue); // ['User A', 'User B', 'User C']

// 2. Peek front element - O(1)
const frontItem = queue[0];
console.log("Queue front:", frontItem); // 'User A'

// 3. Dequeue (remove from front) - O(n) with array shift
const dequeued = queue.shift();
console.log("Dequeued item:", dequeued); // 'User A'
console.log("Queue after dequeue:", queue); // ['User B', 'User C']

// 4. Queue size
console.log("Queue size:", queue.length); // 2
