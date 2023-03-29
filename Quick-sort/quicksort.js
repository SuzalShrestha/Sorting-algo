function quicksort(arr) {
  // Check if the input is length 1 or less
  // If so, it's already sorted: return
  if (arr.length <= 1) return arr;

  // Pick the first value as the pivot
  let pivot = arr[0];

  // Orient the pivot so that...
  let left = [];
  let right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      // every number smaller than the pivot is to the left
      left.push(arr[i]);
    } else {
      // every number larger (or equal) than the pivot is to the right
      right.push(arr[i]);
    }
  }
  // Recursively sort the left
  left = quicksort(left);

  // Recursively sort the right
  right = quicksort(right);

  // Return the left, pivot and right in sorted order
  return [...left, pivot, ...right];
}
module.exports = [quicksort];
