let products = [
  ["sayuran", 5000],
  ["ikan", 20000],
  ["beras", 50000],
  ["kemeja", 300000],
  ["sepatu", 250000],
];

function belanja(user) {
  let count = 0;
  for (let i = 0; i < user.shopList.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (user.shopList[i] === products[j][0]) {
        if (user.money < products[j][1]) {
        } else {
          user.money -= products[j][1];
          count++;
        }
      }
    }
  }
  if (count === 0) {
    return `${user.name} tidak berhasil membeli apapun`;
  }
  return `${user.name} berhasil membeli ${count} item dengan sisa uang ${user.money}`;
}

console.log(
  belanja({
    name: "jihan",
    money: 100000,
    shopList: ["sayuran", "sayuran", "sayuran", "ikan", "beras"],
  })
); // 'jihan berhasil membeli 5 item dengan sisa uang 15000'

console.log(
  belanja({
    name: "popoy",
    money: 25000,
    shopList: ["sepatu"],
  })
); // 'popoy tidak berhasil membeli apapun'

console.log(
  belanja({
    name: "Tike",
    money: 5000000,
    shopList: [
      "kemeja",
      "kemeja",
      "kemeja",
      "sepatu",
      "sepatu",
      "kemeja",
      "sepatu",
      "beras",
      "beras",
      "beras",
    ],
  })
); // 'Tike berhasil membeli 10 item dengan sisa uang 3900000

console.log(
  belanja({
    name: "Mike",
    money: 615000,
    shopList: ["sepatu", "kemeja", "beras", "ikan"],
  })
); // 'Mike berhasil membeli 3 item dengan sisa uang 15000
