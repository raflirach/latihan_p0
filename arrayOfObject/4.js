/*
============================
Gotta Group Them All
============================
[INSTRUCTIONS]
Terdapat fungsi gottaGroupEmAll yang menerima satu parameter berupa array of object, pada tiap object terdapat 3 key yaitu name, status dan type,
fungsi ini akan mengeluarkan output berupa object dan mengelompokkan tiap pokemon sesuai dengan typenya, untuk lebih jelasnya silahkan lihat contoh dibawah ini.
[EXAMPLE]
input: [
  {
    name: 'Beedrill',
    status: { attack: 72, hp: 73, defense: 75 },
    type: 'Flying'
  },
  {
    name: 'Gliscor',
    status: { attack: 70, hp: 95, defense: 85 },
    type: 'Flying'
  },
  {
    name: 'Caterpie',
    status: { attack: 30, hp: 45, defense: 55 },
    type: 'Bug'
  }
]
proses: mengelompokkan berdasarkan type dan juga mencari pokemon dengan overall status terbaik di tiap kategorinya
output: 
{
  Flying: {
    list: [ 'Beedrill', 'Gliscor' ],
    bestStatus: { name: 'Beedrill', overallStat: 220 } //overall stat di dapat dari menjumlahkan attack hp dan defense pokemon
  },
  Bug: {
    list: [ 'Caterpie' ],
    bestStatus: { name: 'Caterpie', overallStat: 130 }
  }
}
[RULE]
- DILARANG MENGGUNAKAN FUNGSI ES6 map, reduce, filter
- DILARANG MENGGUNAKAN FOR IN DAN FOR OF
*/
function gottaGroupEmAll(pokemonList) {
  // proses
}
var pokemonList = [
{
  name: 'Charizard',
  status: { attack: 84, hp: 78, defense: 78 },
  type: 'Flying'
},
{
  name: 'Talonflame',
  status: { attack: 81, hp: 78, defense: 71 },
  type: 'Flying'
},
{
  name: 'Gengar',
  status: { attack: 65, hp: 60, defense: 60 },
  type: 'Ghost'
},
{
  name: 'Grimer',
  status: { attack: 80, hp: 80, defense: 50 },
  type: 'Poison'
},
{
  name: 'Arbok',
  status: { attack: 95, hp: 60, defense: 69 },
  type: 'Poison'
}
]
console.log(gottaGroupEmAll(pokemonList))
//output:
// {
//   Flying: {
//     list: [ 'Charizard', 'Talonflame' ],
//     bestStatus: { name: 'Charizard', overallStat: 240 }
//   },
//   Ghost: {
//     list: [ 'Gengar' ],
//     bestStatus: { name: 'Gengar', overallStat: 185 }
//   },
//   Poison: {
//     list: [ 'Grimer', 'Arbok' ],
//     bestStatus: { name: 'Grimer', overallStat: 210 }
//   }
// }
var pokemonList2 = [
{
  name: 'Beedrill',
  status: { attack: 72, hp: 73, defense: 75 },
  type: 'Flying'
},
{
  name: 'Gliscor',
  status: { attack: 70, hp: 95, defense: 85 },
  type: 'Flying'
},
{
  name: 'Caterpie',
  status: { attack: 30, hp: 45, defense: 55 },
  type: 'Bug'
}
]
console.log(gottaGroupEmAll(pokemonList2))
//output: 
// {
//   Flying: {
//     list: [ 'Beedrill', 'Gliscor' ],
//     bestStatus: { name: 'Beedrill', overallStat: 220 }
//   },
//   Bug: {
//     list: [ 'Caterpie' ],
//     bestStatus: { name: 'Caterpie', overallStat: 130 }
//   }
// }