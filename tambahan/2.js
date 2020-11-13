/**
 * Objective: Grouping collection of data into an object
 *
 * Kosasih memiliki sebuah peternakan dengan kumpulan hewan sebagai berikut
 * [ 'Ayam', 'Bebek', 'Ayam', 'Kuda', 'Kuda']
 *
 * Buatlah sebuah fungsi yang akan menerima input sebuah array seperti diatas, dan akan mengembalikan
 * Sebuah object jumlah hewan yang dimiliki oleh Kosasih dikelompokan berdasarkan namanya.
 * Liat driver code untuk output yang lebih jelas
 */

function groupAnimal(array) {
  const obj = {};
  for (let i = 0; i < array.length; i++) {
    if (obj[array[i]]) {
      obj[array[i]]++;
    } else {
      obj[array[i]] = 1;
    }
  }

  return obj;
}

console.log(groupAnimal(["Ayam", "Bebek", "Ayam", "Kuda", "Kuda"]));
/**
 * {
 *  Ayam: 2,
 *  Kuda: 2,
 *  Bebek: 1
 * }
 */
