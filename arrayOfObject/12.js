function split(string) {
 // create manual code for split ;
}

function filterEvenNumber(arr) {
  // create filter even (genap) number from arr 
}

function filterOddNumber(arr) {
  // create filter odd (ganjil) number from arr 
}

function formatOutput(arr){
  // create function for formating string (look at test case output)
}

function getNumberByReq(req, string) {
    // string numbers dibuat jadi kumpulanAngka (array of numbers
    // membuat filter untuk angka genap / ganjil sesuai dengan req
    // kalo sudah dapat kumpulan angka req akan di formating ke string
}

let nums = "2341;123;30;700;80"
console.log(getNumberByReq('ganjil', nums)) // '2341 dan 123'
console.log(getNumberByReq('genap', nums)) // '30, 700 dan 80'
