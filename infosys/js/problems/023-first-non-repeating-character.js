// 23. Return the first character that occurs once, or null if none exists.
function firstNonRepeatingCharacter(value) {
    const frequencies = new Map();

    for (const character of value) {
        frequencies.set(character, (frequencies.get(character) || 0) + 1);
    }

    for (const character of value) {
        if (frequencies.get(character) === 1) {
            return character;
        }
    }

    return null;
}

console.log(firstNonRepeatingCharacter("swiss")); // "w"