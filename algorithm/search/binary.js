const searchArr = [-5, 2, 4, 6, 10];

function binarySearch(target, arr) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch(10, searchArr));
console.log(binarySearch(6, searchArr));
console.log(binarySearch(4, searchArr));
console.log(binarySearch(9, searchArr));

//Big-O = O(log n)
