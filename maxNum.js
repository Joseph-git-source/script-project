// function maxNum(Max) {
//   let getMax = 0;
//   for (let i = 0; i < Max.length; i++);
//   let currentNum = Max[i];
//   if (currentNum > maxNum) {
//     maxNum = currentNum;
//   }
// }

function maxNum(Max) {
  // Check if the array is empty
  if (Max.length === 0) {
    return null; // Return null if the array is empty
  }

  // Initialize `getMax` with the first element of the array
  let getMax = Max[0];


  for (let i = 1; i < Max.length; i++) {
    // Get the current element
    let currentNum = Max[i];

    // Compare the current element with `getMax`
    if (currentNum > getMax) {
     
      getMax = currentNum;
    }
  }

  // Return the maximum number found
  return getMax;
}
const arr = [3, 7, 2, 9, 5];
console.log(maxNum(arr));

