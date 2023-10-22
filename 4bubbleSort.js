array = [1, 3, 2, 4, 5, 2, 8];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const actual = array[j];
        array[j] = array[j + 1];
        array[j + 1] = actual;
      }
    }
  }
  return array;
}
console.log(bubbleSort(array));
