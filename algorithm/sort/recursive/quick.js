function ascQuickSort(arr) {
  // base point
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];

  //   Spliting into right and left arraya
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...ascQuickSort(left), pivot, ...ascQuickSort(right)];
}
function descQuickSort(arr) {
  // base point
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];

  let left = [];
  let right = [];

  //   Spliting into right and left arraya
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...descQuickSort(left), pivot, ...descQuickSort(right)];
}

let array = [9, -3, -8, 5, 7, 2];

console.log(ascQuickSort(array));
console.log(descQuickSort(array));

// Worst case = O(n^2)
// Avg case = O(nlogn)
