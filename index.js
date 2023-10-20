function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  Time Complexity: O(n^2) where n is the length of the input array.
*/

/* 
  Add your pseudocode here:
  - Initialize two nested loops, one for index i and one for index j.
  - For each pair of indices (i, j) where i < j:
    - Check if array[i] + array[j] equals the target.
    - If it does, return true (a pair with the target sum was found).
  - If no such pair is found in the entire array, return false.

*/

/*
  Add written explanation of your solution here:
  The function uses two nested loops to compare all pairs of numbers in the array. For each pair, it checks if their sum matches the target. If a pair with the target sum is found, the function returns true. If no such pair is found in the entire array, it returns false. This is a brute-force approach with a time complexity of O(n^2), where n is the length of the input array. While not the most efficient solution, it works for small arrays.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}