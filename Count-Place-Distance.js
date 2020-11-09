/* 
====================
Count Place Distance
====================
[INSTRUCTION]
Fungsi countDistance dibuat untuk menghitung jarak dua tempat yang diwakili oleh huruf 'o' di dalam array multidimensi
Terdapat 2 parameter yang diperlukan oleh fungsi countDistance, param pertama berupa array multidimensi,
param kedua berupa number yang menunjukkan uang yang kita miliki saat ini
Ketika melewati huruf 'x' maka uang pengendara akan berkurang sebesar 10000 , dan jika uang habis atau kurang dari 10000
maka perjalanan akan terhenti
[EXAMPLE]
Input :  
[
  ['', 'o', 'x', 'x', '', 'o'],
  ['', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 40000
output :  
Sisa uang : 20000, jarak tempuh: 30 km 
Input :  
[
  ['', 'o', 'x', 'x', 'x', 'x'],
  ['o', '', '', '', ''],
  ['', '', '', '', ''],
] 
dan uang = 30000
output :  
Uang anda habis, jarak tersisa sampai tujuan adalah 10 km
[RULES]
- Dilarang menggunakan indexOf, sort, includes.
- Dilarang menggunakan regex .match dan lainnya!
*/
function countDistance(arr, money) {
  let jarak = -10;
  let x = 0;
  let flag = 0;
  let jarakSisa = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "o") {
        flag += 1;
      }
      if (money < 10000 && flag === 1) {
        jarakSisa += 10;
      }
      if (arr[i][j] === "x" && flag === 1) {
        money -= 10000;
      }
      if (flag === 1) {
        jarak += 10;
      }
    }
  }
  if (money < 10000) {
    return `Uang anda habis, jarak tersisa sampai tujuan adalah ${jarakSisa} km`;
  }
  return `Sisa uang : ${money}, jarak tempuh: ${jarak} km`;
}
console.log(
  countDistance(
    [
      ["", "o", "", "", "o"],
      ["", "", "", "", ""],
      ["", "", "", "", ""],
    ],
    40000
  )
);
// output:
/* Sisa uang : 40000, jarak tempuh: 20 km */
console.log(
  countDistance(
    [
      ["", "", "o", "", ""],
      ["", "x", ""],
      ["", "", "", "", "", "x"],
      ["", "o", "", ""],
    ],
    50000
  )
);
// // output:
// /* Sisa uang : 30000, jarak tempuh: 120 km */
console.log(
  countDistance(
    [
      ["", "", "", "", ""],
      ["o", "x", "x", "x", ""],
      ["", "", "", "x", "", "x"],
      ["", "o", "", ""],
    ],
    40000
  )
);
// output:
/* Uang anda habis, jarak tersisa sampai tujuan adalah 30 km*/
console.log(
  countDistance(
    [
      ["", "o", "x", "x", "x", "x"],
      ["o", "", "", "", ""],
      ["", "", "", "", ""],
    ],
    30000
  )
);
// output:
/* Uang anda habis, jarak tersisa sampai tujuan adalah 10 km*/
