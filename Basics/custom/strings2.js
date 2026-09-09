// CUSTOM STRING FUNCTIONS IN JAVASCRIPT
const text = "Hello World";

// 1. CUSTOM LENGTH
function customLength(str) {
    let count = 0;

    while (str[count] !== undefined) {
        count++;
    }

    return count;
}

console.log("Length:", customLength(text));
// 11

// 2. CUSTOM CHAR AT
function customCharAt(str, index) {

    if (index < 0 || index >= customLength(str)) {
        return "";
    }

    return str[index];
}

console.log("Character:", customCharAt(text, 0));
// H

// 3. CUSTOM CHAR CODE
function customCharCodeAt(str, index) {

    if (index < 0 || index >= customLength(str)) {
        return NaN;
    }

    return str.charCodeAt(index);
}

console.log("Character code:", customCharCodeAt(text, 0));
// 4. CUSTOM INDEX OF
function customIndexOf(str, search) {

    let strLength = customLength(str);
    let searchLength = customLength(search);

    if (searchLength === 0) {
        return 0;
    }

    for (let i = 0; i <= strLength - searchLength; i++) {

        let found = true;

        for (let j = 0; j < searchLength; j++) {

            if (str[i + j] !== search[j]) {
                found = false;
                break;
            }
        }

        if (found) {
            return i;
        }
    }

    return -1;
}

console.log(
    "Index of World:",
    customIndexOf(text, "World")
);
// 6

// 5. CUSTOM LAST INDEX OF
function customLastIndexOf(str, search) {

    let strLength = customLength(str);
    let searchLength = customLength(search);

    for (let i = strLength - searchLength; i >= 0; i--) {

        let found = true;

        for (let j = 0; j < searchLength; j++) {

            if (str[i + j] !== search[j]) {
                found = false;
                break;
            }
        }

        if (found) {
            return i;
        }
    }

    return -1;
}

console.log(
    "Last index of l:",
    customLastIndexOf(text, "l")
);
// 9

// 6. CUSTOM INCLUDES
function customIncludes(str, search) {

    return customIndexOf(str, search) !== -1;
}

console.log(
    "Contains Hello:",
    customIncludes(text, "Hello")
);
// true

// 7. CUSTOM STARTS WITH
function customStartsWith(str, search) {

    let searchLength = customLength(search);

    if (searchLength > customLength(str)) {
        return false;
    }

    for (let i = 0; i < searchLength; i++) {

        if (str[i] !== search[i]) {
            return false;
        }
    }

    return true;
}

console.log(
    "Starts with He:",
    customStartsWith(text, "He")
);
// true

// 8. CUSTOM ENDS WITH
function customEndsWith(str, search) {

    let strLength = customLength(str);
    let searchLength = customLength(search);

    let start = strLength - searchLength;

    if (start < 0) {
        return false;
    }

    for (let i = 0; i < searchLength; i++) {

        if (str[start + i] !== search[i]) {
            return false;
        }
    }

    return true;
}

console.log(
    "Ends with ld:",
    customEndsWith(text, "ld")
);
// true

// 9. CUSTOM SLICE
function customSlice(str, start, end) {

    let result = "";
    let length = customLength(str);

    if (start < 0) {
        start = length + start;
    }

    if (end === undefined) {
        end = length;
    }

    if (end < 0) {
        end = length + end;
    }

    if (start < 0) {
        start = 0;
    }

    if (end > length) {
        end = length;
    }

    for (let i = start; i < end; i++) {
        result += str[i];
    }

    return result;
}

console.log(
    "Slice:",
    customSlice(text, 0, 5)
);
// Hello

// 10. CUSTOM SUBSTRING
function customSubstring(str, start, end) {

    let result = "";
    let length = customLength(str);

    if (start < 0) {
        start = 0;
    }

    if (end === undefined) {
        end = length;
    }

    if (end < 0) {
        end = 0;
    }

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    if (end > length) {
        end = length;
    }

    for (let i = start; i < end; i++) {
        result += str[i];
    }

    return result;
}

console.log(
    "Substring:",
    customSubstring(text, 0, 5)
);
// Hello

// 11. CUSTOM SPLIT
function customSplit(str, separator) {

    let result = [];
    let current = "";
    let resultIndex = 0;

    for (let i = 0; i < customLength(str); i++) {

        if (str[i] === separator) {

            result[resultIndex] = current;
            resultIndex++;

            current = "";

        } else {

            current += str[i];
        }
    }

    result[resultIndex] = current;

    return result;
}

console.log(
    "Split:",
    customSplit(text, " ")
);
// ["Hello", "World"]

// 12. CUSTOM TO UPPER CASE
function customToUpperCase(str) {

    let result = "";

    for (let i = 0; i < customLength(str); i++) {

        let char = str[i];

        switch (char) {
            case "a": char = "A"; break;
            case "b": char = "B"; break;
            case "c": char = "C"; break;
            case "d": char = "D"; break;
            case "e": char = "E"; break;
            case "f": char = "F"; break;
            case "g": char = "G"; break;
            case "h": char = "H"; break;
            case "i": char = "I"; break;
            case "j": char = "J"; break;
            case "k": char = "K"; break;
            case "l": char = "L"; break;
            case "m": char = "M"; break;
            case "n": char = "N"; break;
            case "o": char = "O"; break;
            case "p": char = "P"; break;
            case "q": char = "Q"; break;
            case "r": char = "R"; break;
            case "s": char = "S"; break;
            case "t": char = "T"; break;
            case "u": char = "U"; break;
            case "v": char = "V"; break;
            case "w": char = "W"; break;
            case "x": char = "X"; break;
            case "y": char = "Y"; break;
            case "z": char = "Z"; break;
        }

        result += char;
    }

    return result;
}

console.log(
    "Uppercase:",
    customToUpperCase(text)
);
// HELLO WORLD

// 13. CUSTOM TO LOWER CASE
function customToLowerCase(str) {

    let result = "";

    for (let i = 0; i < customLength(str); i++) {

        let char = str[i];

        switch (char) {
            case "A": char = "a"; break;
            case "B": char = "b"; break;
            case "C": char = "c"; break;
            case "D": char = "d"; break;
            case "E": char = "e"; break;
            case "F": char = "f"; break;
            case "G": char = "g"; break;
            case "H": char = "h"; break;
            case "I": char = "i"; break;
            case "J": char = "j"; break;
            case "K": char = "k"; break;
            case "L": char = "l"; break;
            case "M": char = "m"; break;
            case "N": char = "n"; break;
            case "O": char = "o"; break;
            case "P": char = "p"; break;
            case "Q": char = "q"; break;
            case "R": char = "r"; break;
            case "S": char = "s"; break;
            case "T": char = "t"; break;
            case "U": char = "u"; break;
            case "V": char = "v"; break;
            case "W": char = "w"; break;
            case "X": char = "x"; break;
            case "Y": char = "y"; break;
            case "Z": char = "z"; break;
        }

        result += char;
    }

    return result;
}

console.log(
    "Lowercase:",
    customToLowerCase(text)
);
// hello world

// 14. CUSTOM TRIM
function customTrim(str) {

    let start = 0;
    let end = customLength(str) - 1;

    while (
        start <= end &&
        (
            str[start] === " " ||
            str[start] === "\n" ||
            str[start] === "\t"
        )
    ) {
        start++;
    }

    while (
        end >= start &&
        (
            str[end] === " " ||
            str[end] === "\n" ||
            str[end] === "\t"
        )
    ) {
        end--;
    }

    let result = "";

    for (let i = start; i <= end; i++) {
        result += str[i];
    }

    return result;
}

console.log(
    "Trimmed:",
    customTrim("   Hello World   ")
);
// Hello World

// 15. CUSTOM REPLACE
function customReplace(str, search, replacement) {

    let index = customIndexOf(str, search);

    if (index === -1) {
        return str;
    }

    let result = "";

    // Before search word
    for (let i = 0; i < index; i++) {
        result += str[i];
    }

    // Replacement
    result += replacement;

    // After search word
    for (
        let i = index + customLength(search);
        i < customLength(str);
        i++
    ) {
        result += str[i];
    }

    return result;
}

console.log(
    "Replace:",
    customReplace(text, "World", "JavaScript")
);
// Hello JavaScript

// 16. CUSTOM REPLACE ALL
function customReplaceAll(str, search, replacement) {

    let result = "";
    let i = 0;

    while (i < customLength(str)) {

        let found = true;

        for (let j = 0; j < customLength(search); j++) {

            if (str[i + j] !== search[j]) {
                found = false;
                break;
            }
        }

        if (found) {

            result += replacement;
            i += customLength(search);

        } else {

            result += str[i];
            i++;
        }
    }

    return result;
}

console.log(
    "Replace all:",
    customReplaceAll(text, "l", "L")
);
// HeLLo WorLd

// 17. CUSTOM REPEAT
function customRepeat(str, count) {

    let result = "";

    for (let i = 0; i < count; i++) {
        result += str;
    }

    return result;
}

console.log(
    "Repeated:",
    customRepeat(text, 2)
);
// Hello WorldHello World

// 18. CUSTOM CONCAT
function customConcat(str1, str2) {

    let result = "";

    for (let i = 0; i < customLength(str1); i++) {
        result += str1[i];
    }

    for (let i = 0; i < customLength(str2); i++) {
        result += str2[i];
    }

    return result;
}

console.log(
    "Concatenated:",
    customConcat(text, "!")
);
// Hello World!