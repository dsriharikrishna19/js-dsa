// =============================================================================
// PATTERN 08: HEAP / PRIORITY QUEUE (TOP K & TWO HEAPS)
// =============================================================================
// 🎯 When to use:
// - Maintaining dynamic running median (Find Median from Data Stream).
// - Top K Frequent elements, Kth Largest element.
// - Dijkstra's shortest path, Prim's MST.
// =============================================================================

class SimpleMinHeap {
    constructor() { this.heap = []; }
    peek() { return this.heap[0] ?? null; }
    size() { return this.heap.length; }
    insert(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i > 0) {
            const p = Math.floor((i - 1) / 2);
            if (this.heap[p] <= this.heap[i]) break;
            [this.heap[p], this.heap[i]] = [this.heap[i], this.heap[p]];
            i = p;
        }
    }
    extractMin() {
        if (this.heap.length <= 1) return this.heap.pop() ?? null;
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        let i = 0;
        while (2 * i + 1 < this.heap.length) {
            let left = 2 * i + 1, right = 2 * i + 2, smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[left]) smallest = right;
            if (this.heap[i] <= this.heap[smallest]) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
        return min;
    }
}

const minHeap = new SimpleMinHeap();
minHeap.insert(10); minHeap.insert(5); minHeap.insert(20);
console.log("Min-Heap extractMin:", minHeap.extractMin()); // 5
console.log("Min-Heap peek:", minHeap.peek()); // 10
