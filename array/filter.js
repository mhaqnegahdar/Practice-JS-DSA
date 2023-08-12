// removes the items whitch return fals

const numArray = [1, 2, 3, 4, 3, 2, 1, 4, 5, 6, 7];

// Remove repetitive values
const filteredNumArray = numArray.filter(
  (item, index, arr) => arr.indexOf(item) === index
);

console.log("Filtered Array:", filteredNumArray);
