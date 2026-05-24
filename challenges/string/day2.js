// ========================= PROBLEM 1 =========================
// First Unique Char
// O(n)
function firstUniqueChar(str) {
  const freq = {};

  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (let char of str) {
    if (freq[char] === 1) return char;
  }

  return false;
}

// ========================= PROBLEM 2 =========================
// Given an array of numbers and a target, return indices of two numbers that add up to the target.
// O(n)

function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const complete = target - nums[i];

    if (map[complete] !== undefined) retun[(map[complete], i)];

    map[nums[i]] = i;
  }

  return null;
}

// ========================= PROBLEM 3 =========================
// Given two strings, return true if they are anagrams of each other.
// O(n)

function isAnagram(s, t) {
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

// ========================= PROBLEM 4 =========================
// Given a string, return the length of the longest substring without repeating characters.
// O(n)
function longestSubstring(str) {
  let left = 0;
  let maxLength = 0;

  const seen = {};

  for (let right = 0; right < str.length; right++) {
    const char = str[right];

    if (seen[char] >= left) {
      left = seen[char] + 1;
    }

    seen[char] = right;

    const windowLength = right - left + 1;

    maxLength = Math.max(maxLength, windowLength);
  }

  return maxLength;
}

// console.log(longestSubstring("abcabcbb"));
// console.log(longestSubstring("bbbbb"));
// console.log(longestSubstring("pwwkew"));

// ========================= PROBLEM 5 =========================
// Given a string, return true if it is a palindrome, otherwise false.
// O(n)
function isPalindrome(str) {
  const s = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("A man, asdfaea plan, a canal: Panama"));

// ========================= PROBLEM 6 =========================
// Group Anagrams

function groupAnagrams(arr) {
  const groups = arr.reduce((acc, val, i, array) => {
    const text = val.split("").sort().join("");

    if (acc[text]) {
      acc[text].push(val);
    } else {
      acc[text] = [val];
    }

    return acc;
  }, {});

  return Object.values(groups);
}

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// ========================= Closure Test =========================

function myNumbers() {
  let n = 0;

  return {
    next: function () {
      n += 10;
      return { value: n };
    },
  };
}

const n = myNumbers();

n.next();
n.next();

n.next();

n.next();
console.log(n.n);
