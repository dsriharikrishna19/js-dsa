// =============================================================================
// CLASSIC SORTING ALGORITHMS IN JAVASCRIPT
// =============================================================================
//
// Comparison Table:
// ┌────────────────┬──────────────┬──────────────┬──────────────┬──────────────┐
// │ Algorithm      │ Best Time    │ Avg Time     │ Worst Time   │ Space        │
// ├────────────────┼──────────────┼──────────────┼──────────────┼──────────────┤
// │ Bubble Sort    │ O(n)         │ O(n²)        │ O(n²)        │ O(1)         │
// │ Selection Sort │ O(n²)        │ O(n²)        │ O(n²)        │ O(1)         │
// │ Insertion Sort │ O(n)         │ O(n²)        │ O(n²)        │ O(1)         │
// │ Merge Sort     │ O(n log n)   │ O(n log n)   │ O(n log n)   │ O(n)         │
// │ Quick Sort     │ O(n log n)   │ O(n log n)   │ O(n²)        │ O(log n)     │
// └────────────────┴──────────────┴──────────────┴──────────────┴──────────────┘

// -----------------------------------------------------------------------------
// 1. Bubble Sort (Compare adjacent and swap)
// -----------------------------------------------------------------------------
function bubbleSort(arr) {
    const a = [...arr];
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
        let swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                swapped = true;
            }
        }
        if (!swapped) break; // Optimization: early stop if already sorted
    }
    return a;
}

// -----------------------------------------------------------------------------
// 2. Selection Sort (Repeatedly find minimum from unsorted part)
// -----------------------------------------------------------------------------
function selectionSort(arr) {
    const a = [...arr];
    const n = a.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (a[j] < a[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            [a[i], a[minIdx]] = [a[minIdx], a[i]];
        }
    }
    return a;
}

// -----------------------------------------------------------------------------
// 3. Insertion Sort (Build sorted array one element at a time like playing cards)
// -----------------------------------------------------------------------------
function insertionSort(arr) {
    const a = [...arr];
    const n = a.length;
    for (let i = 1; i < n; i++) {
        const key = a[i];
        let j = i - 1;
        while (j >= 0 && a[j] > key) {
            a[j + 1] = a[j];
            j--;
        }
        a[j + 1] = key;
    }
    return a;
}

// -----------------------------------------------------------------------------
// 4. Merge Sort (Divide and Conquer - Stable O(n log n))
// -----------------------------------------------------------------------------
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

// -----------------------------------------------------------------------------
// 5. Quick Sort (Divide and Conquer with Pivot Partitioning)
// -----------------------------------------------------------------------------
function quickSort(arr) {
    const a = [...arr];

    function partition(low, high) {
        const pivot = a[high];
        let i = low - 1;

        for (let j = low; j < high; j++) {
            if (a[j] < pivot) {
                i++;
                [a[i], a[j]] = [a[j], a[i]];
            }
        }
        [a[i + 1], a[high]] = [a[high], a[i + 1]];
        return i + 1;
    }

    function sort(low, high) {
        if (low < high) {
            const pi = partition(low, high);
            sort(low, pi - 1);
            sort(pi + 1, high);
        }
    }

    sort(0, a.length - 1);
    return a;
}

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------
const sample = [64, 34, 25, 12, 22, 11, 90];
console.log("Original:      ", sample);
console.log("Bubble Sort:   ", bubbleSort(sample));
console.log("Selection Sort:", selectionSort(sample));
console.log("Insertion Sort:", insertionSort(sample));
console.log("Merge Sort:    ", mergeSort(sample));
console.log("Quick Sort:    ", quickSort(sample));
