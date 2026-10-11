// =============================================================================
// KMP ALGORITHM (KNUTH-MORRIS-PRATT STRING MATCHING)
// =============================================================================
//
// 🎯 Problem:
// Find all occurrences of a `pattern` string inside a `text` string.
// - Naive string search takes O(n * m) time in worst case.
// - KMP achieves O(n + m) time by never backtracking the text pointer!
//
// 💡 Intuition:
// Precompute the LPS Array (Longest Proper Prefix which is also Suffix).
// When a mismatch occurs after matching some characters, the LPS table tells us
// how many characters of the pattern can be preserved without re-matching!
//
// Time Complexity: O(n + m) | Space Complexity: O(m)
// =============================================================================

// 1. Build the LPS (Longest Prefix Suffix) table for the pattern
function buildLPS(pattern) {
    const m = pattern.length;
    const lps = new Array(m).fill(0);
    let len = 0; // Length of previous longest prefix suffix
    let i = 1;

    while (i < m) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1]; // Fallback to smaller matched prefix
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

// 2. KMP Search
function kmpSearch(text, pattern) {
    if (!pattern) return [];

    const n = text.length;
    const m = pattern.length;
    const lps = buildLPS(pattern);
    const matches = [];

    let i = 0; // index for text
    let j = 0; // index for pattern

    while (i < n) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === m) {
            // Found a full match! Match starts at index (i - j)
            matches.push(i - j);
            j = lps[j - 1]; // Look for next possible match
        } else if (i < n && text[i] !== pattern[j]) {
            // Mismatch after j matches
            if (j !== 0) {
                j = lps[j - 1]; // Shift pattern using LPS table without moving i!
            } else {
                i++;
            }
        }
    }

    return matches;
}

// Tests
const txt = "ABABDABACDABABCABAB";
const pat = "ABABCABAB";
console.log("KMP Search for pattern in text:", kmpSearch(txt, pat)); // [ 10 ]

const text2 = "AABAACAADAABAABA";
const pat2 = "AABA";
console.log("Occurrences of 'AABA':", kmpSearch(text2, pat2)); // [ 0, 9, 12 ]
