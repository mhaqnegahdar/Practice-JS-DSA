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

function isPrime2(n) {
  testArr = [2, 3, 5, 7];
  flag = true;

  if (!testArr.includes(n)) {
    for (var i = 0; i < 4; i++) {
      if (n % testArr[i] === 0 || n < 2) {
        flag = false;
        break;
      }
    }
  }

  return flag;
}

console.log(isPrime2(1)); //false
console.log(isPrime2(2)); //true
console.log(isPrime2(19)); //true
console.log(isPrime2(15)); //false

// Big-O =  O(8)
