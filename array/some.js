// Returns boolean / check if some values pass the given condition

const participants = [
  { name: "John", age: 13 },
  { name: "Mohamad", age: 12 },
  { name: "Ahmed", age: 15 },
  { name: "Max", age: 19 },
  { name: "David", age: 18 },
];

const res = participants.some(item => item.age > 18);

if (res) {
  console.log("Someone is an adult");
} else {
  console.log("NO onw is an adult");
}
