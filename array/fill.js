// Fills all the elements with the given value
// array.fill(val,indexFrom,indexTo)

// Creating an array and filling each its numbers

function fillInNumbers(n) {
  return Array(n)
    .fill(0)
    .map((val, index) => index + 1);
}

console.log(fillInNumbers(23));
