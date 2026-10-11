// =============================================================================
// PREDEFINED SET IN JAVASCRIPT
// =============================================================================
// Set stores unique values of any type (primitive values or object references).
// Keys and values are the same; lookups/insertions are O(1) average time.

// 1. Create a Set
const basicSet = new Set();
const setFromArr = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log("Set from Array (Duplicates removed):", setFromArr); // Set(5) { 1, 2, 3, 4, 5 }

// 2. add() → Add a value (Chaining supported)
basicSet.add(10);
basicSet.add(20).add(30).add(10); // Duplicate 10 is ignored
console.log("After add:", basicSet); // Set(3) { 10, 20, 30 }

// 3. has() → Check existence (O(1) lookup vs O(n) array.includes)
console.log("Has 20?", basicSet.has(20)); // true
console.log("Has 99?", basicSet.has(99)); // false

// 4. delete() → Remove value by value
basicSet.delete(20);
console.log("After delete 20:", basicSet); // Set(2) { 10, 30 }

// 5. size → Number of elements (Property, not a method)
console.log("Size:", basicSet.size); // 2

// 6. Iterating a Set
// 6.1 for...of
for (const val of basicSet) {
    console.log("Value:", val);
}

// 6.2 forEach
basicSet.forEach(val => console.log("forEach val:", val));

// 7. Converting Set <-> Array
const arrayWithDuplicates = [1, 1, 2, 3, 3, 4, 5, 5];
const uniqueArray = [...new Set(arrayWithDuplicates)];
console.log("Unique array:", uniqueArray); // [1, 2, 3, 4, 5]

// 8. Set Mathematical Operations ⭐⭐⭐
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);

// 8.1 Union (A ∪ B)
const union = new Set([...setA, ...setB]);
console.log("Union:", union); // Set(6) { 1, 2, 3, 4, 5, 6 }

// 8.2 Intersection (A ∩ B)
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log("Intersection:", intersection); // Set(2) { 3, 4 }

// 8.3 Difference (A - B)
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log("Difference (A - B):", difference); // Set(2) { 1, 2 }

// 9. clear() → Remove all elements
basicSet.clear();
console.log("After clear:", basicSet.size); // 0
