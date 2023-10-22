let array = [29, 10, 1, 37, 14];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length - i - 1; j++) {
    console.log(i, j);
    if (array[j] > array[j + 1]) {
      const actual = array[j];
      array[j] = array[j + 1];
      array[j + 1] = actual;
    }
  }
}
console.log("array : ", array);
