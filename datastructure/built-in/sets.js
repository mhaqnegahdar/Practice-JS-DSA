// Creating a new Set
const mySet = new Set();

// Adding elements to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate values are ignored

console.log(mySet); // Output: Set { 1, 2, 3 }

// Checking if a value exists in the Set
console.log(mySet.has(2)); // Output: true
console.log(mySet.has(4)); // Output: false

// Removing an element from the Set
mySet.delete(2);
console.log(mySet); // Output: Set { 1, 3 }

// Iterating through the Set
for (const item of mySet) {
  console.log(item);
}
