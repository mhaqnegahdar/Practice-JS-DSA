function ascInsertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    // last sorted index
    let j = i - 1;

    //While left is bigger
    while (j >= 0 && arr[j] > numberToInsert) {
      // shift to right position
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
}

function descInsertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    // last sorted index
    let j = i - 1;

    //While left is smaller
    while (j >= 0 && arr[j] < numberToInsert) {
      // shift to right position
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }

  return arr;
}

let array = [9, -3, -8, 5, 7, 2];

console.log(ascInsertionSort(array));
console.log(descInsertionSort(array));

// Big-O = O(n)^2
