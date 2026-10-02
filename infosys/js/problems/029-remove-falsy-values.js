// 29. Return a copy of the array with all falsy values removed.
function removeFalsyValues(values) {
    return values.filter(Boolean);
}

console.log(removeFalsyValues([0, 1, false, 2, "", 3, null])); // [1, 2, 3]