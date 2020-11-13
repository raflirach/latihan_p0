function cariModus(arr) {
  let obj = {};
  let panjang = 0;

  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }

  for (const key in obj) {
    panjang++;
    if (obj[key] === 1) {
      delete obj[key];
    }
  }

  if (panjang === arr.length || panjang === 1) {
    return -1;
  }

  for (const key in obj) {
    return key;
  }
  return obj;
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
