function ascBubbleSort(arr) {
  let wrapped;
  do {
    wrapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        wrapped = true;
      }
    }
  } while (wrapped);

  return arr;
}

function descBubbleSort(arr) {
  let wrapped;
  do {
    wrapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        wrapped = true;
      }
    }
  } while (wrapped);

  return arr;
}

let array = [9, -3, -8, 5, 7, 2];

console.log(ascBubbleSort(array));
console.log(descBubbleSort(array));

// Big-O = O(n^2)
