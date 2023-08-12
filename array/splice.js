// Changes thi original array by removing or adding items

const numArray = [1, 2, 3, 4, 5];

// Add 6 & 7 on index 2
// const newNumArray = numArray.splice(2, 0, 6, 7);

// remove 3 items from index 2 then Add 6 & 7 on index 2
const newNumArray2 = numArray.splice(0, 3, 6, 7);

// console.log("New Array", newNumArray);
console.log("New Array 2", newNumArray2);
console.log("Modified Array", numArray);
