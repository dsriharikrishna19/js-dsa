// CUSTOM ARRAY FUNCTIONS IN JAVASCRIPT

// Original array
const numbers = [12, 25, 7, 18, 30];

// 1. GET ARRAY LENGTH
function getLength(arr) {
    let count = 0;

    for (let i = 0; arr[i] !== undefined; i++) {
        count++;
    }

    return count;
}

console.log("Length:", getLength(numbers));

// 2. GET LAST ELEMENT
function getLastElement(arr) {
    let length = getLength(arr);

    return arr[length - 1];
}

console.log("Last element:", getLastElement(numbers));

// 3. CUSTOM PUSH
function customPush(arr, value) {
    let length = getLength(arr);

    arr[length] = value;

    return arr;
}

console.log("After push:", customPush(numbers, 40));

// 4. CUSTOM POP
function customPop(arr) {
    let length = getLength(arr);

    if (length === 0) {
        return undefined;
    }

    let removedValue = arr[length - 1];

    delete arr[length - 1];

    return removedValue;
}

console.log("Removed value:", customPop(numbers));
console.log("After pop:", numbers);

// 5. CUSTOM UNSHIFT
function customUnshift(arr, value) {
    let length = getLength(arr);

    for (let i = length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }

    arr[0] = value;

    return arr;
}

console.log("After unshift:", customUnshift(numbers, 5));

// 6. CUSTOM SHIFT
function customShift(arr) {
    let length = getLength(arr);

    if (length === 0) {
        return undefined;
    }

    let removedValue = arr[0];

    for (let i = 0; i < length - 1; i++) {
        arr[i] = arr[i + 1];
    }

    delete arr[length - 1];

    return removedValue;
}

console.log("Removed value:", customShift(numbers));
console.log("After shift:", numbers);

// 7. CUSTOM INDEX OF
function customIndexOf(arr, target) {
    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log("Index of 18:", customIndexOf(numbers, 18));

// 8. CUSTOM INCLUDES
function customIncludes(arr, target) {
    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        if (arr[i] === target) {
            return true;
        }
    }

    return false;
}

console.log("Contains 25:", customIncludes(numbers, 25));

// 9. CUSTOM FIND
function customFind(arr, condition) {
    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        if (condition(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}

console.log(
    "First number greater than 20:",
    customFind(numbers, function (value) {
        return value > 20;
    })
);

// 10. CUSTOM FIND INDEX
function customFindIndex(arr, condition) {
    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        if (condition(arr[i])) {
            return i;
        }
    }

    return -1;
}

console.log(
    "Index of first number greater than 20:",
    customFindIndex(numbers, function (value) {
        return value > 20;
    })
);

// 11. CUSTOM FOREACH
function customForEach(arr, callback) {
    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        callback(arr[i], i);
    }
}

customForEach(numbers, function (value, index) {
    console.log("Index:", index, "Value:", value);
});

// 12. CUSTOM MAP
function customMap(arr, callback) {
    let result = [];

    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        result[i] = callback(arr[i], i);
    }

    return result;
}

const doubledNumbers = customMap(numbers, function (value) {
    return value * 2;
});

console.log("Doubled numbers:", doubledNumbers);

// 13. CUSTOM FILTER
function customFilter(arr, condition) {
    let result = [];
    let resultIndex = 0;

    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        if (condition(arr[i])) {
            result[resultIndex] = arr[i];
            resultIndex++;
        }
    }

    return result;
}

const evenNumbers = customFilter(numbers, function (value) {
    return value % 2 === 0;
});

console.log("Even numbers:", evenNumbers);

// 14. CUSTOM REDUCE
function customReduce(arr, callback, initialValue) {
    let accumulator = initialValue;

    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        accumulator = callback(accumulator, arr[i]);
    }

    return accumulator;
}

const total = customReduce(
    numbers,
    function (accumulator, value) {
        return accumulator + value;
    },
    0
);

console.log("Total:", total);

// 15. CUSTOM SOME
function customSome(arr, condition) {
    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        if (condition(arr[i])) {
            return true;
        }
    }

    return false;
}

const hasLargeNumber = customSome(numbers, function (value) {
    return value > 40;
});

console.log("Has number greater than 40:", hasLargeNumber);

// 16. CUSTOM EVERY
function customEvery(arr, condition) {
    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        if (!condition(arr[i])) {
            return false;
        }
    }

    return true;
}

const allPositive = customEvery(numbers, function (value) {
    return value > 0;
});

console.log("All numbers positive:", allPositive);

// 17. CUSTOM REVERSE
function customReverse(arr) {
    let left = 0;
    let right = getLength(arr) - 1;

    while (left < right) {
        let temp = arr[left];

        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }

    return arr;
}

console.log("Reversed:", customReverse(numbers));

// 18. CUSTOM JOIN
function customJoin(arr, separator) {
    let result = "";
    let length = getLength(arr);

    for (let i = 0; i < length; i++) {
        result += arr[i];

        if (i !== length - 1) {
            result += separator;
        }
    }

    return result;
}

console.log(
    "Joined array:",
    customJoin(numbers, " - ")
);

// 19. CUSTOM SLICE
function customSlice(arr, start, end) {
    let result = [];
    let resultIndex = 0;

    let length = getLength(arr);

    if (end > length) {
        end = length;
    }

    for (let i = start; i < end; i++) {
        result[resultIndex] = arr[i];
        resultIndex++;
    }

    return result;
}

console.log(
    "Sliced array:",
    customSlice(numbers, 1, 4)
);

// 20. CUSTOM CONCAT
function customConcat(arr1, arr2) {
    let result = [];

    let index = 0;

    let length1 = getLength(arr1);

    for (let i = 0; i < length1; i++) {
        result[index] = arr1[i];
        index++;
    }

    let length2 = getLength(arr2);

    for (let i = 0; i < length2; i++) {
        result[index] = arr2[i];
        index++;
    }

    return result;
}

console.log(
    "Concatenated:",
    customConcat(numbers, [50, 60, 70])
);

// 21. CUSTOM FLAT
function customFlat(arr) {
    let result = [];
    let resultIndex = 0;

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {

            for (let j = 0; j < arr[i].length; j++) {
                result[resultIndex] = arr[i][j];
                resultIndex++;
            }

        } else {
            result[resultIndex] = arr[i];
            resultIndex++;
        }
    }

    return result;
}

const nestedArray = [
    [10, 20],
    [30, 40],
    [50, 60]
];

console.log(
    "Flattened:",
    customFlat(nestedArray)
);

// 22. CUSTOM SORT
function customSort(arr) {

    let result = [];

    // Copy manually
    for (let i = 0; i < getLength(arr); i++) {
        result[i] = arr[i];
    }

    // Bubble Sort
    for (let i = 0; i < getLength(result); i++) {

        for (let j = 0; j < getLength(result) - i - 1; j++) {

            if (result[j] > result[j + 1]) {

                let temp = result[j];

                result[j] = result[j + 1];
                result[j + 1] = temp;
            }
        }
    }

    return result;
}

console.log(
    "Sorted:",
    customSort(numbers)
);

// 23. CUSTOM LAST INDEX OF
function customLastIndexOf(arr, target) {

    let length = getLength(arr);

    for (let i = length - 1; i >= 0; i--) {

        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

console.log(
    "Last index:",
    customLastIndexOf(numbers, 18)
);


