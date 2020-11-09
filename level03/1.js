// Isilah item kosong dalam multiple array di bawah dengan menggabungkan antara item di depan dan belakangnya dan diantaranya tambahkan karakter '&'

function fillInTheBlank(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === "") {
        array[i][j] = `${array[i][j - 1]}&${array[i][j + 1]}`;
      }
    }
  }
  return array;
}

console.log(
  fillInTheBlank([
    ["saya", "", "kamu"],
    ["aku", "", "kau"],
    ["dia", "", "mereka"],
  ])
);

// [
//     ['saya', 'saya&kamu', 'kamu'],
//     ['aku', 'aku&kau', 'kau'],
//     ['dia', 'dia&mereka', 'mereka'],
// ]
