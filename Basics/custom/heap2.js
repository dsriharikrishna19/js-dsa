// =============================================================================
// MIN-HEAP / MAX-HEAP (PRIORITY QUEUE) IMPLEMENTATION IN JAVASCRIPT
// =============================================================================
// A Binary Heap stored as a 1D Array where:
// Parent index: Math.floor((i - 1) / 2)
// Left child:   2 * i + 1
// Right child:  2 * i + 2

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper indexing methods
    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i1, i2) {
        const temp = this.heap[i1];
        this.heap[i1] = this.heap[i2];
        this.heap[i2] = temp;
    }

    // Peek minimum element - O(1)
    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    // Insert element into heap - O(log n)
    insert(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[index] < this.heap[this.getParentIndex(index)]
        ) {
            const parentIdx = this.getParentIndex(index);
            this.swap(index, parentIdx);
            index = parentIdx;
        }
    }

    // Extract minimum element - O(log n)
    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return min;
    }

    bubbleDown() {
        let index = 0;
        const length = this.heap.length;

        while (this.getLeftChildIndex(index) < length) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            const rightChildIndex = this.getRightChildIndex(index);

            if (
                rightChildIndex < length &&
                this.heap[rightChildIndex] < this.heap[smallerChildIndex]
            ) {
                smallerChildIndex = rightChildIndex;
            }

            if (this.heap[index] <= this.heap[smallerChildIndex]) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

// -----------------------------------------------------------------------------
// Testing MinHeap
// -----------------------------------------------------------------------------
const minHeap = new MinHeap();
minHeap.insert(25);
minHeap.insert(10);
minHeap.insert(15);
minHeap.insert(5);
minHeap.insert(20);

console.log("Peek Min:", minHeap.peek()); // 5
console.log("Extract Min:", minHeap.extractMin()); // 5
console.log("Extract Min:", minHeap.extractMin()); // 10
console.log("Peek next Min:", minHeap.peek()); // 15
console.log("Remaining Heap Size:", minHeap.size()); // 3
