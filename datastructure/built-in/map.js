// Creating a new Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "John");
myMap.set("age", 30);
myMap.set("isStudent", false);

console.log(myMap); // Output: Map { 'name' => 'John', 'age' => 30, 'isStudent' => false }

// Getting values from the Map
console.log(myMap.get("name")); // Output: John
console.log(myMap.get("gender")); // Output: undefined

// Checking if a key exists in the Map
console.log(myMap.has("age")); // Output: true
console.log(myMap.has("city")); // Output: false

// Deleting a key-value pair from the Map
myMap.delete("isStudent");
console.log(myMap); // Output: Map { 'name' => 'John', 'age' => 30 }

// Iterating through the Map
for (const [key, value] of myMap) {
  console.log(key, value);
}

// Using objects as keys
const objKey = { key: "objKey" };
myMap.set(objKey, "Value associated with an object key");
console.log(myMap.get(objKey)); // Output: Value associated with an object key
