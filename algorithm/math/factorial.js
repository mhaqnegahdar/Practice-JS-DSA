function factorial(n) {
  let res = 1;
  for (var i = 2; i <= n; i++) {
    res *= i;
  }
  return res;
}

console.log(`Factorial 5:`, factorial(1));

// Big-O = O(n)
