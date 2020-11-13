const bagiKataPerkata = (kalimat) => kalimat.split(" ");

// const bagiKataPerHuruf = (kata) => {
//   for (let i = 0; i < kata.length; i++) {
//     kata[i] = kata[i].split("");
//   }
//   return kata;
// };

const bagiKataPerHuruf = (kata) => kata.map((x) => x.split(""));

console.log(bagiKataPerHuruf(bagiKataPerkata("aku kamu dia")));
