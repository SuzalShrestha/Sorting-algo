function bubbleSort(arr) {
  // Iterate through the array
  let swap = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let current = arr[i];
    let next = arr[i + 1];
    // If the current value is greater than its neighbor to the right
    // Swap those values
    if (current > next) {
      let temp = arr[i];
      arr[i] = next;
      arr[i + 1] = temp;
      swap++;
      // Do not move this console.log
      console.log(arr.join(","));
    }
  }
  // If you get to the end of the array and no swaps have occurred, return
  if (swap === 0) return;
  // Otherwise, repeat from the beginning
  bubbleSort(arr);
}

module.exports = bubbleSort;
