function firstUniqueChar(str) {
  const freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }

  return null;
}

console.log(firstUniqueChar("aaaabgggsdfae"));

const numbers = [1, 2, 3, 4];
console.log(numbers);
const hi = numbers.splice(2, 1, "hi");
console.log(numbers);
console.log(hi);
numbers.sort((a, b) => b - a);
console.log(numbers);

const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

console.log(Math.random());

console.log(points);

