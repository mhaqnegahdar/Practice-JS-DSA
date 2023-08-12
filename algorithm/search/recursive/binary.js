const searchArray = [-5, -2, 0, 4, 6, 10];

function recrusiveBinarySearch(target, arr) {
  return search(target, arr, 0, arr.length - 1);
}

function search(target, arr, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  //   Find Middle Index
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  //   Compare
  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  //   Assign Left & Right indexes
  if (arr[middleIndex] > target) {
    return search(target, arr, leftIndex, middleIndex - 1);
  } else {
    return search(target, arr, middleIndex + 1, rightIndex);
  }
}

console.log(recrusiveBinarySearch(10, searchArray)); //5
console.log(recrusiveBinarySearch(6, searchArray)); //4
console.log(recrusiveBinarySearch(4, searchArray)); //3
console.log(recrusiveBinarySearch(9, searchArray)); //-1

//Big-O = O(log n)
