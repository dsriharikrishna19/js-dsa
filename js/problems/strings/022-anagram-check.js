// 22. Check whether two strings contain the same letters, ignoring case and spaces/punctuation.

// 1: Sort both strings 
function areAnagrams1(first, second) {
  const normalize = value =>
    value.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");

  return normalize(first) === normalize(second);
}


// 2: Count letters with a Map 
function areAnagrams2(first, second) {
  const clean = value => value.toLowerCase().replace(/[^a-z0-9]/g, "");

  const a = clean(first);
  const b = clean(second);

  if (a.length !== b.length) return false;

  const counts = new Map();
  for (const ch of a) {
    counts.set(ch, (counts.get(ch) || 0) + 1);
  }

  for (const ch of b) {
    const remaining = counts.get(ch);
    if (!remaining) return false;
    counts.set(ch, remaining - 1);
  }

  return true;
}


//3 : Count letters with a plain object 
function areAnagrams3(first, second) {
  const clean = value => value.toLowerCase().replace(/[^a-z0-9]/g, "");

  const a = clean(first);
  const b = clean(second);

  if (a.length !== b.length) return false;

  const counts = {};
  for (const ch of a) {
    counts[ch] = (counts[ch] || 0) + 1;
  }

  for (const ch of b) {
    if (!counts[ch]) return false;
    counts[ch]--;
  }

  return true;
}


//  Tests 
console.log(areAnagrams1("listen", "silent"));                       // true
console.log(areAnagrams2("listen", "silent"));                       // true
console.log(areAnagrams3("listen", "silent"));                       // true

console.log(areAnagrams1("Dormitory", "dirty room"));                // true
console.log(areAnagrams2("Dormitory", "dirty room"));                // true
console.log(areAnagrams3("Dormitory", "dirty room"));                // true

console.log(areAnagrams1("The eyes", "They see"));                   // true
console.log(areAnagrams2("The eyes", "They see"));                   // true
console.log(areAnagrams3("The eyes", "They see"));                   // true

console.log(areAnagrams1("hello", "world"));                         // false
console.log(areAnagrams2("hello", "world"));                         // false
console.log(areAnagrams3("hello", "world"));                         // false

console.log(areAnagrams1("aab", "abb"));                             // false
console.log(areAnagrams2("aab", "abb"));                             // false
console.log(areAnagrams3("aab", "abb"));                             // false

console.log(areAnagrams1("abc", "ab"));                              // false
console.log(areAnagrams2("abc", "ab"));                              // false
console.log(areAnagrams3("abc", "ab"));                              // false