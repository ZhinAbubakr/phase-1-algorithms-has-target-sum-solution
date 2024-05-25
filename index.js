function hasTargetSum(array, target) {
  // Create a set to keep track of the numbers we have seen so far
  const seenNumbers = new Set();
  
  // Iterate through each number in the array
  for (const number of array) {
    // Calculate the complement that would add up to the target
    const complement = target - number;

    // If the complement is already in the set, we have found a pair that adds up to the target
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Add the current number to the set
    seenNumbers.add(number);
  }

  // If no pairs add up to the target, return false
  return false;
}

/* 
  Write the Big O time complexity of your function here:
  The time complexity of this function is O(n), where n is the number of elements in the array.
  This is because we only make a single pass through the array.
*/

/* 
  Add your pseudocode here:
  1. Create an empty set called seenNumbers.
  2. Iterate through each number in the array.
    a. Calculate the complement by subtracting the current number from the target.
    b. If the complement exists in seenNumbers, return true.
    c. Add the current number to seenNumbers.
  3. If no pairs are found, return false.
*/

/*
  Add written explanation of your solution here:
  The function hasTargetSum takes an array of numbers and a target sum as inputs. It aims to find if there are any two numbers in the array that add up to the target sum. 
  We use a set to keep track of the numbers we have seen so far. For each number in the array, we calculate the complement that would add up to the target sum. 
  If the complement is found in the set, it means we have a pair of numbers that add up to the target, so we return true. If we finish iterating through the array without finding such a pair, we return false.
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

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([2, 2, 3, 3], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 5));
}

module.exports = hasTargetSum;
