// 30. Deep-clone objects, arrays, Maps, Sets, Dates, and RegExps, including cycles.
function deepClone(value, seen = new WeakMap()) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (seen.has(value)) {
        return seen.get(value);
    }

    if (value instanceof Date) {
        return new Date(value.getTime());
    }

    if (value instanceof RegExp) {
        return new RegExp(value.source, value.flags);
    }

    if (value instanceof Map) {
        const clone = new Map();
        seen.set(value, clone);
        for (const [key, entryValue] of value) {
            clone.set(deepClone(key, seen), deepClone(entryValue, seen));
        }
        return clone;
    }

    if (value instanceof Set) {
        const clone = new Set();
        seen.set(value, clone);
        for (const entry of value) {
            clone.add(deepClone(entry, seen));
        }
        return clone;
    }

    const clone = Array.isArray(value) ? [] : Object.create(Object.getPrototypeOf(value));
    seen.set(value, clone);

    for (const key of Reflect.ownKeys(value)) {
        const descriptor = Object.getOwnPropertyDescriptor(value, key);
        if (Object.prototype.hasOwnProperty.call(descriptor, "value")) {
            descriptor.value = deepClone(descriptor.value, seen);
        }
        Object.defineProperty(clone, key, descriptor);
    }

    return clone;
}

const original = { name: "Ada", scores: [10, 20] };
const copy = deepClone(original);
copy.scores.push(30);
console.log(original.scores); // [10, 20]
console.log(copy.scores); // [10, 20, 30]