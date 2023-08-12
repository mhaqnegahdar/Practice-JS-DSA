function fibonacci(n) {
  const fib = [0, 2];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(`Fibonacci 7:`, fibonacci(7));

// Big-O = O(n)
