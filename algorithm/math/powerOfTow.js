function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }

    n /= 2;
  }

  return true;
}

console.log(isPowerOfTwo(8));

// is PowerOfTwo Bitweise & Optimized

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
}

//Big-O = O(1)
