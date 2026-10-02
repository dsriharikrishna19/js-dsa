// 19. Merge two arrays into a new array.
function mergeArrays(first, second) {
    return [...first, ...second];
}

console.log(mergeArrays([1, 2], [3, 4])); // [1, 2, 3, 4]