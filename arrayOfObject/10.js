/*
  GET OLDEST USER
  Get Oldest User adalah sebuah fungsi untuk mendapatkan user yang memiliki
  umur paling tua. Fungsi akan menerima memberInfo berupa array of object
  yang memiliki key name dan birthdate dan akan mengembalikan nilai
  berupa objek dengan key name dan birthdate dari user yang paling tua.

  RULES:
  1. Asumsi tahun untuk masalah ini adalah 2019.
  2. Tidak boleh menggunakan built in function seperti
    .split(), .map(), .filter()
  3. Format Birthdate user adalah "YYYY-MM-DD"
  4. Asumsi input memiliki user dengan tahun lahir yang berbeda

*/

function getOldestUser(memberInfo) {
  // code below here
}

console.log(getOldestUser([
  {
    name: "miftah",
    birthdate: "1990-12-12"
  },
  {
    name: "wika",
    birthdate: "1991-01-01"
  },
  {
    name: "tony",
    birthdate: "1989-02-02"
  },
  {
    name: "yoki",
    birthdate: "1993-10-10"
  }
])) // { name: 'tony', birthdate: '1989-02-02' }
