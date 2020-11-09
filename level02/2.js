function groupByAge(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 2020 - arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (const key in obj) {
      if (arr[i].toString() === key) {
        count++;
      }
    }
    obj[arr[i]] = count;
  }
  return obj;
}

console.log(groupByAge([2003, 1991, 1821, 2003, 1821, 1995, 1995]));

/**
 * {
 *  17: 2,
 *  29 : 1,
 *  199: 2,
 *  25: 2
 * }
 */
