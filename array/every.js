// Returns boolean / check if all values pass the given condition

const participants = [
  { name: "John" },
  { name: "Mohamad" },
  { name: "Ahmed" },
  { name: "Max" },
  { name: "David" },
];

const res = participants.every(item => item.name !== undefined);

if (res) {
  console.log("All the values have the name property");
} else {
  console.log("Not ll the values have the name property");
}
