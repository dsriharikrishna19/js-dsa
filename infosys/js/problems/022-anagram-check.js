// 22. Check whether two strings contain the same letters, ignoring case and spaces/punctuation.
function areAnagrams(first, second) {
    const normalize = value => value.toLowerCase().replace(/[^a-z0-9]/g, "").split("").sort().join("");
    return normalize(first) === normalize(second);
}

console.log(areAnagrams("listen", "silent")); // true