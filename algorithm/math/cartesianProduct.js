function cartesianProcduct(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

const arr1 = [1, 2];
const arr2 = [2, 3, 4];

console.log(cartesianProcduct(arr1, arr2));

// Big-O = O(mn)
