function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(1)); //false
console.log(isPrime(2)); //true
console.log(isPrime(19)); //true

// Big-O =  O(sqrt(n))
