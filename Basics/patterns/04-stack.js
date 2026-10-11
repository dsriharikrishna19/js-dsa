// =============================================================================
// PATTERN 04: STACK (LIFO MATCHING & PARSING)
// =============================================================================
// 🎯 When to use:
// - Bracket matching and nested structure validation (Valid Parentheses).
// - Evaluating mathematical expressions, reverse polish notation.
// - History / Undo operations, maintaining nested state.
// =============================================================================

// 1. Valid Parentheses - Time: O(n), Space: O(n)
function isValidParentheses(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    for (const ch of s) {
        if (ch === '(' || ch === '{' || ch === '[') {
            stack.push(ch);
        } else if (pairs[ch]) {
            if (stack.pop() !== pairs[ch]) return false;
        }
    }
    return stack.length === 0;
}

console.log("Valid '()[]{}':", isValidParentheses("()[]{}")); // true
console.log("Valid '(]':", isValidParentheses("(]")); // false
