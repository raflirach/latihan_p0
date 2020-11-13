/**
 * Objective: Array of Object
 *
 * Buatlah sebuah array of object setidaknya 5 orang yang ada di dalam batch ini
 *
 * Setiap object yang dibuat harus memiliki properti sebagai berikut:
 * - id -> ( 3 Character dan 3 Angka)
 * - name
 * - grade
 * - gender
 *
 * - Melanjutkan array of object yang sudah dibuat, buatlah sebuah fungsi untuk mencari student dengan grade diatas 80
 * - Buatlah sebuah fungsi untuk menampilkan hanya murid-murid yang memiliki nama dengan huruf depan S
 * - Buatlah sebuah fungsi untuk mencari murid yang memiliki id yang dikirimkan sebagai parameter
 */

// Masukkan array of object kalian disini
const arr = [
  {
    id: "htv001",
    name: "Rafli",
    grade: 100,
    gender: "Male",
  },
  {
    id: "htv002",
    name: "Siska",
    grade: 76,
    gender: "Female",
  },
  {
    id: "htv003",
    name: "Sarah",
    grade: 85,
    gender: "Female",
  },
  {
    id: "htv004",
    name: "Agus",
    grade: 95,
    gender: "Male",
  },
  {
    id: "htv005",
    name: "Rendi",
    grade: 72,
    gender: "Male",
  },
];

function greaterThan80Student(arr) {
  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].grade > 80) {
      hasil.push(arr[i]);
    }
  }
  return hasil;
}

console.log(greaterThan80Student(arr));

function studentStartWithS(arr) {
  let hasil = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name[0] === "S") {
      hasil.push(arr[i]);
    }
  }
  return hasil;
}

console.log(studentStartWithS(arr));

function findStudent(arr, id) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === id) {
      return arr[i];
    }
  }
}

// Masukan id kalian disini
const id = "htv001";
console.log(findStudent(arr, id));
