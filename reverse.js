
function reverseArray(arr) {
  // Create a new array using the spread operator to copy the original array
  const newArray = [...arr];

  // Use the reverse() method to reverse the elements in the new array
  newArray.reverse();

  // Return the reversed array
  return newArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]));

//function to remove duplicates
function removeDuplicates(arr) {
  // Create a new Set from the array to remove duplicates
  const uniqueSet = new Set(arr);

  // Convert the Set back into an array using the spread operator
  const uniqueArray = [...uniqueSet];

  // Return the array with duplicates removed
  return uniqueArray;
}

// Example usage:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

