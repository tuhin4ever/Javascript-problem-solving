// 1:  Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// Solution 1
function reverseString(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Solution 2
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello")); // olleh

// 2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

// Solution 1
function positiveSum(arr) {
  let sum = 0;
  for (let num of arr) {
    if (num > 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(positiveSum([1, -2, 3, 4, 5])); // 13

// 3:  Write a JavaScript program to find the most frequent element in an array and return it.

// Solution 2
function mostFrequent(arr) {
  let count = {};
  let mostFrequent = arr[0];
  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
    if (count[num] > count[mostFrequent]) {
      mostFrequent = num;
    }
  }
  return mostFrequent;
}

console.log(mostFrequent([1, 2, 3, 2, 4, 2, 5])); // 2

// 4:  Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

// Solution 1
function calculator(num1, num2, operator) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  }
}

console.log(calculator(2, 3, "+")); // 5
console.log(calculator(2, 3, "-")); // -1

// 5:  Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

// Solution 1
function generatePassword(length) {
  let password = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
}
console.log(generatePassword(12)); // 5e@3!4^2%1&6

// 6:  Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

//! Solution 1
function romanToInt(roman) {
  const romanNumeral = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
  };
  let total = 0;
  for (let i = 0; i < roman.length; i++) {
    if (romanNumeral[roman[i]] < romanNumeral[roman[i + 1]]) {
      total -= romanNumeral[roman[i]];
    } else {
      total += romanNumeral[roman[i]];
    }
  }
  return total;
}
console.log(romanToInt("XXI")); // 21

//  7:  Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

// Solution 1
function secondSmallest(arr) {
  let sorted = arr.sort();
  // console.log(sorted)
  return sorted[1];
}
console.log(secondSmallest([19, 24, 13, 54, 50])); // 2

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Solution 1
function twoSum(nums, target) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) {
      result.push(i, i + 1);
    }
  }
  return result;
}
console.log(twoSum([1, 3, 6, 8, 11, 15], 9)); // [0, 1]


