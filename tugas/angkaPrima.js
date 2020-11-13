function angkaPrima(angka) {
  if (angka === 2 || angka === 3) {
    return true;
  }
  let flag = 0;
  for (let i = 0; i < angka; i++) {
    if (angka % i === 0) {
      flag++;
    }
  }
  if (flag === 1) {
    return true;
  }
  return false;
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
