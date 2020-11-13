// Interpretasikan apa yang diinginkan functon berdasarkan output yang diharapkan


function foodAndDrink(foods) {}

let items = [
  {
    name: 'Coca Cola',
    type: 'drink'
  },
  {
    name: 'Nasi Padang',
    type: 'food'
  },
  {
    name: 'Aqua',
    type: 'drink'
  },
  {
    name: 'Karedok',
    type: 'food'
  },
  {
    name: 'Ayam bakar',
    type: 'food'
  },
  {
    name: 'Pocari Sweat',
    type: 'drink'
  }
]

console.log(foodAndDrink(items))
/**
 * {
 *  food: ['Nasi Padang', 'Ayam bakar', 'Karedok'],
 *  drink: ['Coca Cola', 'Aqua', 'Pocari Sweat']
 * }
 */
