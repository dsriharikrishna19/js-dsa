# JavaScript DSA: Comprehensive Knowledge Base, Patterns & Algorithms

This repository is your complete reference handbook for **JavaScript Data Structures, Algorithmic Patterns, and Named Algorithms**. Whenever you have doubt about a concept, structure, or interview pattern, consult this directory.

---

## 🧭 Repository Structure

```text
Basics/
├── patterns/                  <-- 🌟 All 18 Blind 75 Algorithmic Patterns (1:1 with DSA folders)
│   ├── 01-arrays-and-hashing.js       (Frequency counter, Two Sum complement, Group Anagrams)
│   ├── 02-two-pointers.js             (Opposite ends, Valid Palindrome, Two Sum II, 3Sum)
│   ├── 03-sliding-window.js           (Best Time to Buy & Sell Stock, Longest Unique Substring)
│   ├── 04-stack.js                    (Bracket validation, LIFO state evaluation)
│   ├── 05-binary-search.js            (Standard, Search in Rotated Array, Find Minimum)
│   ├── 06-linked-list.js              (Fast & Slow Pointers, In-place Reversal, Merge Two Lists)
│   ├── 07-trees.js                    (Invert Tree, BST Validation, Level Order BFS)
│   ├── 08-heap-priority-queue.js      (Min-Heap / Max-Heap, Two Heaps for Running Median)
│   ├── 09-backtracking.js             (Combination Sum, Subsets, Permutations)
│   ├── 10-tries.js                    (Prefix Tree, Insert, Search, StartsWith)
│   ├── 11-graphs.js                   (Number of Islands, Matrix 2D DFS/BFS, Connected Components)
│   ├── 12-advanced-graphs.js          (Topological Sort, Kahn's In-Degree, Course Schedule)
│   ├── 13-1d-dynamic-programming.js   (House Robber, Coin Change, Climbing Stairs)
│   ├── 14-2d-dynamic-programming.js   (Unique Paths, Longest Common Subsequence)
│   ├── 15-greedy.js                   (Kadane's Maximum Subarray, Jump Game reachability)
│   ├── 16-intervals.js                (Merge Overlapping Intervals, Meeting Rooms)
│   ├── 17-math-and-geometry.js        (Rotate Matrix 90°, Spiral Matrix boundary simulation)
│   └── 18-bit-manipulation.js         (XOR Single Number, Hamming Weight, Missing Number)
│
├── cheat-sheets/              <-- ⚡ Quick Memory Tips, Tricks & 3-Line Skeletons
│   ├── PATTERNS_MEMORY_TIPS.md        (Flowchart, visual mental analogies, 60-second interview checklist)
│   └── quick-skeletons.js             (All 18 executable minimal code skeletons)
│
├── algorithms/                <-- 📐 6 Named Algorithms & Math Logics
│   ├── 01-sorting-algorithms.js       (Bubble, Selection, Insertion, Merge Sort, Quick Sort)
│   ├── 02-kadanes-algorithm.js        (Maximum Subarray Sum O(n) time, O(1) space with indices)
│   ├── 03-dijkstras-algorithm.js      (Shortest Path on weighted graphs + path reconstruction)
│   ├── 04-union-find.js               (Disjoint Set Union with Path Compression & Union by Rank)
│   ├── 05-kmp-string-search.js        (Knuth-Morris-Pratt O(n + m) string pattern matching with LPS)
│   └── 06-math-logics.js              (Sieve of Eratosthenes, GCD/LCM, Fast Power, Gauss Sum, nCr)
│
├── predefined/                <-- 📦 5 Built-in JavaScript Collections & APIs
│   ├── arrays1.js                     (map, filter, reduce, slice, splice)
│   ├── strings1.js                    (split, substring, indexOf, replace)
│   ├── map1.js                        (Map methods, frequency counting, index mapping)
│   ├── set1.js                        (Set methods, deduplication, union, intersection, difference)
│   └── stack-queue1.js                (Stack & Queue idioms via Array methods)
│
└── custom/                    <-- 🛠️ 8 Data Structures built from scratch
    ├── arrays2.js                     (Custom array methods: push, pop, shift, reverse, etc.)
    ├── strings2.js                    (Custom string manipulation algorithms)
    ├── stack-queue2.js                (Custom Stack & Queue classes with O(1) operations)
    ├── linked-list2.js                (Singly Linked List: append, prepend, insertAt, delete, reverse)
    ├── trees2.js                      (Binary Search Tree: insert, contains, inOrder, preOrder, postOrder, BFS)
    ├── graphs2.js                     (Graph via Adjacency List: addEdge, BFS, DFS recursive & iterative)
    ├── heap2.js                       (Min-Heap / Priority Queue: insert, extractMin, bubbleUp, bubbleDown)
    └── trie2.js                       (Trie / Prefix Tree: insert, search, startsWith, autocomplete)
```

---

## 🌟 All 18 Algorithmic Patterns (Direct Links)

| # | Pattern Name | When to Use? | Direct File Link |
|---|--------------|--------------|------------------|
| 01 | **Arrays & Hashing** | Duplicates, Anagrams, Two Sum complement ($A + B = T$), grouping signatures | [01-arrays-and-hashing.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/01-arrays-and-hashing.js) |
| 02 | **Two Pointers** | Sorted arrays, palindrome verification, Two Sum II, 3Sum, partition | [02-two-pointers.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/02-two-pointers.js) |
| 03 | **Sliding Window** | Contiguous subarrays/substrings, best stock profit, longest non-repeating substring | [03-sliding-window.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/03-sliding-window.js) |
| 04 | **Stack** | Bracket pairs (`()[]{}`), nested expressions, reverse polish notation | [04-stack.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/04-stack.js) |
| 05 | **Binary Search** | Sorted collections ($O(\log n)$), search in rotated sorted array, find minimum | [05-binary-search.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/05-binary-search.js) |
| 06 | **Linked List** | Fast & Slow pointers, 3-pointer in-place reversal, merge sorted lists | [06-linked-list.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/06-linked-list.js) |
| 07 | **Trees** | Invert tree, validate BST range ($min < val < max$), level order BFS | [07-trees.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/07-trees.js) |
| 08 | **Heap / Priority Queue** | Find median from data stream (Two Heaps), Top K frequent, Kth largest | [08-heap-priority-queue.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/08-heap-priority-queue.js) |
| 09 | **Backtracking** | Combination Sum, Subsets, Permutations (Choose $\to$ Explore $\to$ Unchoose) | [09-backtracking.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/09-backtracking.js) |
| 10 | **Tries** | Word dictionary, prefix matching (`startsWith`), autocomplete | [10-tries.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/10-tries.js) |
| 11 | **Graphs** | Number of Islands, 2D matrix DFS/BFS connected components | [11-graphs.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/11-graphs.js) |
| 12 | **Advanced Graphs** | Topological Sort (Kahn's In-Degree BFS), Course Schedule, Alien Dictionary | [12-advanced-graphs.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/12-advanced-graphs.js) |
| 13 | **1-D Dynamic Programming** | Decision states (House Robber, Coin Change, Climbing Stairs) | [13-1d-dynamic-programming.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/13-1d-dynamic-programming.js) |
| 14 | **2-D Dynamic Programming** | Grid paths (Unique Paths), sequence matching (LCS) | [14-2d-dynamic-programming.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/14-2d-dynamic-programming.js) |
| 15 | **Greedy** | Kadane's maximum subarray sum, Jump Game max reachability | [15-greedy.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/15-greedy.js) |
| 16 | **Intervals** | Sort by start time, Merge overlapping intervals, Meeting Rooms | [16-intervals.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/16-intervals.js) |
| 17 | **Math & Geometry** | Rotate matrix 90° clockwise (Transpose + Reverse), Spiral Matrix boundary traversal | [17-math-and-geometry.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/17-math-and-geometry.js) |
| 18 | **Bit Manipulation** | XOR canceling pairs (Single Number), Kernighan's lowest bit clear ($n \& (n-1)$) | [18-bit-manipulation.js](file:///c:/Users/Signi/Documents/js/js-dsa/Basics/patterns/18-bit-manipulation.js) |
