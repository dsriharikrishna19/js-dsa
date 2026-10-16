// 23. Return the first character that occurs once, or null if none exists.
function firstNonRepeatingCharacter(value) {
    const counts = new Map();

    for(const char of value){
      counts.set(char,(counts.get(char) || 0)+1);
    }

    for(const char of value){
      if(counts.get(char) === 1){
        return char;
      }
    }
    
    return null;
}

console.log(firstNonRepeatingCharacter("swiss")); // "w"