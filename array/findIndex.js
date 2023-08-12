// Returns the item that passes the condition

const participants = [
  { name: "John", age: 13 },
  { name: "Mohamad", age: 12 },
  { name: "Ahmed", age: 15 },
  { name: "Max", age: 19 },
  { name: "David", age: 18 },
  { name: "Eli", age: 20 },
];

const res = participants.findIndex(item => item.age > 18);

if (res) {
  console.log("Here is the adult's index:", res);
} else {
  console.log("NO onw is an adult");
}
