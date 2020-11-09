function leftRotation(array, count) {
  // for (let j = 0; j < count; j++) {
  //   for (let i = 0; i < array.length - 1; i++) {
  //     if (i !== 0) {
  //       let temp = array[i];
  //       array[i] = array[i - 1];
  //       array[i - 1] = temp;
  //     } else {
  //       let temp = array[i];
  //       array[i] = array[array.length - 1];
  //       array[array.length - 1] = temp;
  //     }
  //   }
  // }
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + count]) {
      let temp = array[i];
      array[i] = array[i + count];
      array[i + count] = temp;
    }
    console.log(array);
  }
  return 0;
}

console.log(leftRotation([0, 1, 2, 3, 4, 5], 1)); // [ 1, 2, 3, 4, 5, 0]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 2)); // [ 2, 3, 4, 5, 0, 1 ]
console.log(leftRotation([0, 1, 2, 3, 4, 5], 3)); // [ 3, 4, 5, 0, 1, 2 ]
