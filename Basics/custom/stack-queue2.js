// =============================================================================
// CUSTOM STACK & QUEUE IMPLEMENTATIONS IN JAVASCRIPT
// =============================================================================

// -----------------------------------------------------------------------------
// 1. CUSTOM STACK (ARRAY / OBJECT BACKED) - LIFO
// All primary operations (push, pop, peek) run in O(1) time.
// -----------------------------------------------------------------------------
class CustomStack {
    constructor() {
        this.items = {};
        this.count = 0;
    }

    // Push item to the top of stack - O(1)
    push(element) {
        this.items[this.count] = element;
        this.count++;
        return this.count;
    }

    // Pop item from top of stack - O(1)
    pop() {
        if (this.isEmpty()) return undefined;
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }

    // Peek at the top element without removing - O(1)
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.count - 1];
    }

    // Check if stack is empty - O(1)
    isEmpty() {
        return this.count === 0;
    }

    // Get number of elements - O(1)
    size() {
        return this.count;
    }

    // Clear stack
    clear() {
        this.items = {};
        this.count = 0;
    }

    // Print stack contents
    print() {
        const values = [];
        for (let i = 0; i < this.count; i++) {
            values.push(this.items[i]);
        }
        return values.join(" -> ");
    }
}

// Testing CustomStack
const myStack = new CustomStack();
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log("Stack:", myStack.print()); // 10 -> 20 -> 30
console.log("Peek:", myStack.peek());   // 30
console.log("Pop:", myStack.pop());     // 30
console.log("Size after pop:", myStack.size()); // 2


// -----------------------------------------------------------------------------
// 2. CUSTOM QUEUE (OBJECT BACKED - O(1) DEQUEUE) - FIFO
// Standard JS Array.shift() is O(n). This implementation achieves O(1) enqueue & dequeue.
// -----------------------------------------------------------------------------
class CustomQueue {
    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }

    // Enqueue element to back of queue - O(1)
    enqueue(element) {
        this.items[this.backIndex] = element;
        this.backIndex++;
    }

    // Dequeue element from front of queue - O(1)
    dequeue() {
        if (this.isEmpty()) return undefined;
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }

    // Peek front element - O(1)
    peek() {
        if (this.isEmpty()) return undefined;
        return this.items[this.frontIndex];
    }

    // Check if empty - O(1)
    isEmpty() {
        return this.backIndex === this.frontIndex;
    }

    // Get size - O(1)
    size() {
        return this.backIndex - this.frontIndex;
    }

    // Print queue
    print() {
        const result = [];
        for (let i = this.frontIndex; i < this.backIndex; i++) {
            result.push(this.items[i]);
        }
        return result.join(" <- ");
    }
}

// Testing CustomQueue
const myQueue = new CustomQueue();
myQueue.enqueue("Alpha");
myQueue.enqueue("Beta");
myQueue.enqueue("Gamma");
console.log("Queue:", myQueue.print()); // Alpha <- Beta <- Gamma
console.log("Peek Front:", myQueue.peek()); // Alpha
console.log("Dequeue:", myQueue.dequeue()); // Alpha
console.log("Size after dequeue:", myQueue.size()); // 2
