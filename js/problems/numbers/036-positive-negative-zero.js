// 36. Classify a number using positive, negative, and zero conditions.
function classifyNumber(number) {
    if (number > 0) {
        return "positive";
    }
    if (number < 0) {
        return "negative";
    }
    return number === 0 ? "zero" : null;
}

console.log(classifyNumber(7)); // "positive"
console.log(classifyNumber(-3)); // "negative"
console.log(classifyNumber(0)); // "zero"