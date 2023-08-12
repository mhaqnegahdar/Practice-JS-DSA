// Changes Values to String then compates them
// to overcome the problem with numbers we can use compare function

// a-b IF Return Value was:
// val<0 a comes first
// val=0 nothing happens
// val>0 b comes first

const cart = [
  { product: "Tea", price: 200, count: 2 },
  { product: "Cap", price: 100, count: 4 },
  { product: "Milk", price: 400, count: 1 },
  { product: "Icecream", price: 500, count: 3 },
  { product: "soap", price: 600, count: 1 },
];

//   ASC SORT
const sortedCart = cart.sort((a, b) => a.price - b.price);

console.log(sortedCart);
