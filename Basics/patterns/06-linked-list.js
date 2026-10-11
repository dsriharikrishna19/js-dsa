// =============================================================================
// PATTERN 06: LINKED LIST (FAST & SLOW POINTERS, REVERSAL, DUMMY HEAD)
// =============================================================================
// 🎯 When to use:
// - Cycle detection (Floyd's Tortoise & Hare).
// - Reversing a linked list (Iterative 3 pointers: prev, curr, next).
// - Removing Nth node from end (gap of n between fast & slow).
// - Merging sorted lists (dummy head node).
// =============================================================================

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 1. Reverse Linked List - Time: O(n), Space: O(1)
function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// 2. Merge Two Sorted Lists - Time: O(n + m), Space: O(1)
function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let tail = dummy;
    while (l1 && l2) {
        if (l1.val <= l2.val) { tail.next = l1; l1 = l1.next; }
        else { tail.next = l2; l2 = l2.next; }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}

// Helper to print list
function printList(head) {
    const res = [];
    while (head) { res.push(head.val); head = head.next; }
    return res.join(" -> ");
}

const list = new ListNode(1, new ListNode(2, new ListNode(3)));
console.log("Reversed List:", printList(reverseList(list))); // 3 -> 2 -> 1
