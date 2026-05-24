// First and Last Character
// Input: "hello"
// Output: { first: "h", last: "o" }

// Input: "a"
// Output: { first: "a", last: "a" }

const firstAndLastCharacter = (str) => {
  if (str.length === 0) return { first: "", last: "" };

  return { first: str[0], last: str.at(-1) };
};

console.log(firstAndLastCharacter("hello"));

console.log(firstAndLastCharacter("a"));

console.log(firstAndLastCharacter(""));
