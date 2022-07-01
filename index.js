function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j <array.length; j++)
      if (array[i] + array[j] === target) {
        return true
      } 
  }
  return false
}


/* 
Runtime: O(n^2)
Space: O(n)
*/

/* 
  take the first element of the array and sum it with every subsequent elements
  if the sum adds up to the target value return the sum
  if not move on to the second element and repeat the same steps etc.
*/

/*
  the function takes an array and starts iterating through the array at index 0
  with each iteration of each element a second iteration is created which essentially sums every subsequent element
  with the the current number from the first iteration until it sums to the target number
  the moment the target number is discovered the boolean value true will be returned thus breaking out of the loop
  and the entire hasTargetSum function
  if the target number is not found then the hasTargetSum function returns false

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
