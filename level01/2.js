/**
 * Hitunglah berapa total biaya yang harus dibayar oleh user.
 * Apabila User memiliki status premium, maka dia akan diberikan diskon sebesar 30% dari total pembeliannya.
 * Apabila status User adalah reguler, maka dia tidak mendapatkan diskon.
 */

let onSale = [
    ['Aqua Galon', 10000],
    ['Tamagochi', 50000],
    ['Batre ABC', 5000]
]

function compute(obj) {
    // your code here

}

let user = {
    name: 'Kira',
    age: 19,
    status: 'premium',
    products: ['Aqua Galon', 'Tamagochi', 'Batre ABC']
}

console.log(compute(user)) // 'Kira membeli 3 barang dengan jumlah biaya 45500 rupiah