// =============================================================================
// PATTERN 01: ARRAYS & HASHING (FREQUENCY COUNTER / COMPLEMENT LOOKUP)
// =============================================================================
// 🎯 When to use:
// - Detecting duplicates, counting character frequencies (Valid Anagram).
// - Looking up complement pairs (Two Sum: complement = target - nums[i]).
// - Grouping items by key/signature (Group Anagrams).
// - Eliminates nested loops: reduces O(n²) to O(n) using O(1) hash table lookups.
// =============================================================================

// 1. Two Sum (Complement Lookup) - Time: O(n), Space: O(n)
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}

// 2. Valid Anagram (Frequency Count) - Time: O(n), Space: O(1) (26 characters)
function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = {};
    for (const ch of s) count[ch] = (count[ch] || 0) + 1;
    for (const ch of t) {
        if (!count[ch]) return false;
        count[ch]--;
    }
    return true;
}

// 3. Group Anagrams (Signature Hashing) - Time: O(n * k log k), Space: O(n * k)
function groupAnagrams(strs) {
    const map = {};
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map[key]) map[key] = [];
        map[key].push(str);
    }
    return Object.values(map);
}

console.log("Two Sum [2,7,11,15], target 9:", twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log("Is Anagram 'anagram' & 'nagaram'?", isAnagram("anagram", "nagaram")); // true
console.log("Group Anagrams:", groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
