function groupAnimals(animals) {
  let hasil = [];

  for (let i = 0; i < animals.length; i++) {
    let flag = 0;
    let inner = [];
    for (let j = 0; j < animals.length; j++) {
      if (animals[i][0] === animals[j][0]) {
        inner.push(animals[j]);
      }
    }
    for (let k = 0; k < hasil.length; k++) {
      if (hasil[k][0] === inner[0]) {
        flag = 1;
      }
    }
    if (!flag) {
      hasil.push(inner);
    }
  }
  return hasil;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
