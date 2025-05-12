// Function to calculate the sum of all elements in an array
function sumArray(arr) {
  // Initialize a variable `sum` to store the total sum, starting at 0
  let sum = 0;

  // Loop through each element in the array
  for (let i = 0; i < arr.length; i++) {
    // Add the current element (arr[i]) to the `sum` variable
    sum += arr[i];
  }


  return sum;
}

const arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr)); 