// Implement a function that demonstrates call/apply/bind behavior.
// Goal: make `this` point to the correct object.
function introduce(greeting, punctuation) {
    return `${greeting} ${this.name}${punctuation}`;
}

function bindExample() {
    // TODO: implement using call, apply, bind
}

// Example usage:
// const person = { name: 'Ava' };
// console.log(introduce.call(person, 'Hello', '!')); // Hello Ava!
// console.log(introduce.apply(person, ['Hi', '.'])); // Hi Ava.
// const greet = introduce.bind(person, 'Greetings');
// console.log(greet('!')); // Greetings Ava!
