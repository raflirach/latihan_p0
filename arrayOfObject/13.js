
/**
 *  Seseorang  ingin membeli minuman-minuman karena kebetulan sedang ada promosi dengan diskon maksimal 40%.
 *  Semua sellers direpresentasikan dengan array bernama "sellers", yang memiliki properti berupa object juga.
 *  satu sellers, misal "Kokumi" menjual barang-barang yang terdapat di items dan dia sedang memberikan promo diskon sebesar 
 *  "discount" (40%).
 * 
 *  Implementasikan function beliTermurah yang akan menerima input berupa array berisi minuman yang ingin dibeli oleh user.
 *  Function akan mengoutput hasil berupa harga dan rekomendasi tempat membeli minuman-minuman tersebut dengan total harga 
 *  yang paling murah.
 * @param {Array} toBuy
 */
function beliTermurah(toBuy) {
  let sellers = [
    {
      seller: 'BobaFett',
      items: [
				{name: 'Fett Drink', price: 30000},
				{name: 'Dragon Boba Juice', price: 40000},
				{name: 'Star Big Boba', price: 25000}
			],
			discount: 0.15
    },
    {
      seller: 'BobaFest',
      items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.35
    },
    {
      seller: 'ChaTime',
      items: [
				{ name: 'Fett Drink', price: 18000 },
				{ name: 'Dragon Boba Juice', price: 24000 },
				{ name: 'Star Big Boba', price: 21000 }
			],
			discount: 0.1
    },
    {
      seller: 'Kokumi',
      items: [
				{ name: 'Fett Drink', price: 32000 },
				{ name: 'Dragon Boba Juice', price: 42000 },
				{ name: 'Star Big Boba', price: 27000 }
			],
			discount: 0.4
    }
  ]
}

let tc1 = ['Star Big Boba', 'Dragon Boba Juice'];
let tc2 = ['Fett Drink'];
let tc3 = [];
let tc4 = ['Star Big Boba', 'Dragon Boba Juice', 'Fett Drink'];

console.log(beliTermurah(tc1));
/*
Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
// */
console.log(beliTermurah(tc2)); //Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime
console.log(beliTermurah(tc3)); //Pembeli Tidak Membeli Apa-Apa
console.log(beliTermurah(tc4)); 
/**Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime */
