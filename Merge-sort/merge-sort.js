// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Divide the array in half
  let midIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, midIndex);
  let right = arr.slice(midIndex);

  // Recursively sort the left half
  left = mergeSort(left);

  // Recursively sort the right half
  right = mergeSort(right);

  // Merge the halves together and return
  return merge(left, right);
}

// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {
  // Create an empty return array
  let array = [];

  // Point to the first value of each array
  let pointer = 0;

  // While there are still values in each array...
  while (arrA.length !== 0 && arrB.length !== 0) {
    let ele1 = arrA[pointer];
    let ele2 = arrB[pointer];

    // Compare the first values of each array
    let item;
    if (ele1 < ele2) {
      item = arrA.splice(0, 1);
    } else {
      item = arrB.splice(0, 1);
    }
    // Add the smaller value to the return array
    array.push(item[0]);
    // Move the pointer to the next value in that array
  }
  //edge case: if one array is longer than the other
  let next;
  while (arrA.length !== 0 || arrB.length !== 0) {
    if (arrA.length !== 0) {
      next = arrA.splice(0, 1);
    }
    if (arrB.length !== 0) {
      next = arrB.splice(0, 1);
    }
    array.push(next[0]);
  }
  // Return the return array
  return array;
}
module.exports = [merge, mergeSort];
