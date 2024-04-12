function hasTargetSum(array, target) {
  // Write your algorithm here
  const complementMap = new Map();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (complementMap.has(complement)) {
      return true;
    }
    complementMap.set(array[i], i);
  }

  return false;
}

/* 
  O(n)
*/

/* 
1. Define a function named 'hasTargetSum' that takes an array and a target sum as input.
2. Create an empty set called 'seenNumbers' to store the numbers seen while iterating through the array.
3. Iterate through each number in the array:
    a. Calculate the complement by subtracting the current number from the target sum.
    b. If the complement exists in the seenNumbers set, return true (indicating that the target sum is achievable).
    c. Otherwise, add the current number to the seenNumbers set.
4. If the loop completes without finding a complement, return false (indicating that the target sum is not achievable).

*/

/*
  The function 'hasTargetSum' determines whether there are two numbers in a given array that sum up to a specified target value. 
  It iterates through the array, maintaining a set of previously seen numbers. For each number encountered, it calculates the complement (the difference between the target sum and the current number). 
  If the complement exists in the set of seen numbers, it means that there are two numbers in the array that sum up to the target value, and the function returns true. If the loop completes without finding such a complement, the function returns false, indicating that no such pair of numbers exists in the array. This approach has a time complexity of O(n), where n is the size of the input array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
