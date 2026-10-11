// =============================================================================
// SINGLY & DOUBLY LINKED LIST IMPLEMENTATION IN JAVASCRIPT
// =============================================================================

// -----------------------------------------------------------------------------
// 1. LINKED LIST NODE
// -----------------------------------------------------------------------------
class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

// -----------------------------------------------------------------------------
// 2. SINGLY LINKED LIST
// -----------------------------------------------------------------------------
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // Append to end - O(1) with tail pointer
    append(val) {
        const newNode = new ListNode(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Prepend to start - O(1)
    prepend(val) {
        const newNode = new ListNode(val, this.head);
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Insert at index - O(n)
    insertAt(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return !!this.prepend(val);
        if (index === this.length) return !!this.append(val);

        let prev = this.head;
        for (let i = 0; i < index - 1; i++) {
            prev = prev.next;
        }
        const newNode = new ListNode(val, prev.next);
        prev.next = newNode;
        this.length++;
        return true;
    }

    // Delete by value - O(n)
    delete(val) {
        if (!this.head) return false;

        // If head holds the value
        if (this.head.val === val) {
            this.head = this.head.next;
            if (this.length === 1) this.tail = null;
            this.length--;
            return true;
        }

        let current = this.head;
        while (current.next && current.next.val !== val) {
            current = current.next;
        }

        if (current.next) {
            if (current.next === this.tail) {
                this.tail = current;
            }
            current.next = current.next.next;
            this.length--;
            return true;
        }
        return false;
    }

    // Search value - O(n)
    contains(val) {
        let current = this.head;
        while (current) {
            if (current.val === val) return true;
            current = current.next;
        }
        return false;
    }

    // Reverse Linked List in-place - O(n) time, O(1) space ⭐⭐⭐
    reverse() {
        let prev = null;
        let current = this.head;
        this.tail = this.head;

        while (current) {
            const nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        this.head = prev;
        return this;
    }

    // Print list as string
    toArray() {
        const result = [];
        let curr = this.head;
        while (curr) {
            result.push(curr.val);
            curr = curr.next;
        }
        return result;
    }

    print() {
        console.log(this.toArray().join(" -> ") + " -> null");
    }
}

// -----------------------------------------------------------------------------
// Testing SinglyLinkedList
// -----------------------------------------------------------------------------
const sll = new SinglyLinkedList();
sll.append(10);
sll.append(20);
sll.append(30);
sll.prepend(5);
sll.print(); // 5 -> 10 -> 20 -> 30 -> null

sll.insertAt(2, 15);
sll.print(); // 5 -> 10 -> 15 -> 20 -> 30 -> null

sll.delete(15);
sll.print(); // 5 -> 10 -> 20 -> 30 -> null

sll.reverse();
console.log("After Reverse:");
sll.print(); // 30 -> 20 -> 10 -> 5 -> null
