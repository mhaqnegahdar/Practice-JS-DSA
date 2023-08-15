// ASC
function ascMergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  return ascMerge(ascMergeSort(leftArray), ascMergeSort(rightArray));
}

function ascMerge(leftArray, rightArray) {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] <= rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

// DEAC
function descMergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  const leftArray = arr.slice(0, mid);
  const rightArray = arr.slice(mid);

  return descMerge(descMergeSort(leftArray), descMergeSort(rightArray));
}

function descMerge(leftArray, rightArray) {
  const sortedArray = [];

  while (leftArray.length && rightArray.length) {
    if (leftArray[0] > rightArray[0]) {
      sortedArray.push(leftArray.shift());
    } else {
      sortedArray.push(rightArray.shift());
    }
  }
  return [...sortedArray, ...leftArray, ...rightArray];
}

let array = [9, -3, -8, 5, 7, 2];

console.log(ascMergeSort(array));
console.log(descMergeSort(array));

// Big-O = O(nLogn)
