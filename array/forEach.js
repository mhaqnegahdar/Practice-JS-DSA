// forEach has 3 arguments

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const letterArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "a",
  "a",
  "b",
  "c",
  "d",
  "e",
];

// Sum Of The Array
let sum = 0;
numArray.forEach((item, index, arr) => {
  sum += item;
});

console.log("Sum: " + sum);

// Number Of Each Letter

let letterCount = {};

letterArray.forEach(item => {
  if (letterCount[item]) {
    letterCount[item]++;
  } else {
    letterCount[item] = 1;
  }
});

console.log("Letter Count: ", letterCount);
