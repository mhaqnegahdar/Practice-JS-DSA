const searchArr = [-5, 2, 10, 4, 6];

function findIndex(t, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == t) {
      return i;
    }
  }

  return -1;
}

console.log(findIndex(10, searchArr)); //2
console.log(findIndex(6, searchArr)); //4
console.log(findIndex(20, searchArr)); //-1

//Big-O = O(n)
