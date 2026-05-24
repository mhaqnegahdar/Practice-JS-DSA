// Input: ("Hello", "World")
// Output: "Hello World"

// Input: ("JS", "Rocks")
// Output: "JS Rocks"

const arrayOfStrings = ["JS", "Rocks", "Very", "Much"];

function concatStringArray(stringArr) {
  return stringArr.reduce((acc, curVal, curIndex, arr) => {
    return acc.concat(curVal, " ");
  }, "");
}

console.log(concatStringArray(arrayOfStrings));
console.log("".concat(...arrayOfStrings));

console.log(arrayOfStrings.join(" "));
