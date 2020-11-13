/*
============
Battle Stats
============
Diberikan array 2 dimensi yang merupakan rangkuman hasil dari pertempuran 2 kelompok pasukan. Di tiap pasukan, terdapat pasukan-pasukan kecil yang dipimpin oleh Jendralnya masing-masing.

Jika angka Jendral positif, maka di sebuah pertempuran, pasukan Jendral tersebut menang sebanyak angka tersebut
Jika angka Jendral negatif, maka di sebuah pertempuran, pasukan Jendral tersebut kalah sebanyak angka tersebut

Tugas kamu untuk mengeluarkan statistik hasil pertempuran seperti contoh

Contoh :
let battle = [
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
]

console.log(battleStats(battle))

Output :
{
  "Hwang Shi Mok": {
    "Kalah": 1,
    "Menang": 3
  },
  "Savants": {
    "Kalah": 0,
    "Menang": 6
  },
  "Legolas": {
    "Kalah": 30,
    "Menang": 10
  },
}

*/

const battleStats = (battle) => {
  let hasil = {};
  for (let i = 0; i < battle.length; i++) {
    hasil[battle[i][0]] = { Kalah: 0, Menang: 0 };
  }

  for (let i = 0; i < battle.length; i++) {
    for (let key in hasil) {
      if (battle[i][0].toString() === key && battle[i][1] < 0) {
        hasil[battle[i][0]]["Kalah"] += battle[i][1] * -1;
      } else if (battle[i][0].toString() === key && battle[i][1] >= 0) {
        hasil[battle[i][0]]["Menang"] += battle[i][1];
      }
    }
  }
  return hasil;
};

let battle = [
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
];

console.log(battleStats(battle));
