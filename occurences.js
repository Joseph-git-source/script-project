function findMostOccurredElement(arr) {
  const count = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    count[element] = (count[element] || 0) + 1;
    console.log('element', element)
    console.log('count', count)
  }

  let mostOccurredElement;
  let maxCount = 0;

  console.log('count', count)

  for (const key in count) {
    console.log('--------------------------------------------')
    console.log(key, maxCount, count[key])
    console.log('key', key)
    console.log('con', count[key] > maxCount)
    console.log('maxc', maxCount)
    console.log('value', count[key])
    if (count[key] > maxCount) {
      maxCount = count[key];
      mostOccurredElement = key;
    }
  }

  return { element: Number(mostOccurredElement), count: maxCount };
}


const arr = [2, 2, 1, 2, 3, 4, 5, 2, 2, 2, 9, 3];
console.log(findMostOccurredElement(arr));




// current