// Comptess Array and return a single value

const cart = [
  { product: "Tea", price: 200, count: 2 },
  { product: "Cap", price: 100, count: 4 },
  { product: "Milk", price: 400, count: 1 },
  { product: "Icecream", price: 500, count: 3 },
  { product: "soap", price: 600, count: 1 },
];

// Return Total Price

const totalPrice = cart.reduce(
  (prevVal, item, index, arr) => prevVal + item.price * item.count,
  0
);

console.log(totalPrice);
