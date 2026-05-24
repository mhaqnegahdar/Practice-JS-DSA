// ========================= PROBLEM 1 =========================

// O(n)

// function firstUniqueString(str) {
//   const freq = {};

//   for (let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }

//   for (let char of str) {
//     if (freq[char] == 1) return char;
//   }

//   return null;
// }

// ========================= PROBLEM 2 =========================
// O(n²)
// twoSum([2, 7, 11, 15], 9) → [0, 1]
// twoSum([3, 2, 4], 6) → [1, 2]

function twoSum(numArray, sum) {
  for (let i = 0; i < numArray.length; i++) {
    for (let j = i + 1; j < numArray.length; j++) {
      if (numArray[i] + numArray[j] == sum) return [i, j];
    }
  }

  return null;
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));

// =========== OPTIMIZED
// O(n)
// - We need to iterate the arary
// - We calculate target - current
// - Check if we've seen it before
// - If yes return the indexes If No stor it in the hash map
// - Check Next

function twoSum2(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map[complement] !== undefined) {
      return [map[complement], i];
    }

    map[nums[i]] = i;
  }
  return null;
}

console.log(twoSum2([2, 7, 11, 15], 9));
console.log(twoSum2([3, 2, 4], 6));

// ========================= PROBLEM 3 =========================
// O(n)

// isAnagram("listen", "silent") → true
// isAnagram("hello", "world") → false

function isAnagram(str1, str2) {
  if (str1.length != str2.length) return false;

  const str1Map = {};
  const str2Map = {};

  for (let char of str1) {
    str1Map[char] = (str1Map[char] || 0) + 1;
  }

  for (let char of str2) {
    str2Map[char] = (str2Map[char] || 0) + 1;
  }

  for (let char of str1) {
    if (str1Map[char] !== str2Map[char]) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));

// =========== OPTIMIZED

function isAnagram2(s, t) {
  if (s.length !== t.length) return false;

  const freq = {};

  for (let char of s) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of t) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
}


console.log(isAnagram2("listen", "silent"));
console.log(isAnagram2("hellod", "hellot"));