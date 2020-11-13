/**
 * Objective: Memahami pengecekan data di dalam object
 *
 * Misalkan kita memiliki sebuah object seperti ini
 * {
 *  name: 'Kosasih',
 *  grade: 90
 * }
 *
 * Buatlah sebuah fungsi yang akan melakukan pengecekan apakah sebuah property ada di dalam object
 */

function hasProperty(obj, key) {
  for (const keys in obj) {
    if (key === keys) {
      return true;
    }
  }
  return false;
}

console.log(
  hasProperty(
    {
      name: "Kosasih",
      grade: 90,
    },
    "grade"
  )
); // true
console.log(
  hasProperty(
    {
      name: "Kosasih",
      grade: 90,
    },
    "gender"
  )
); // false
