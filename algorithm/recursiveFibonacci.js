function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(`Fibonacci of 7:`, recursiveFibonacci(7));

//Big-O = O(n^2)
