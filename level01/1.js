// Lengkapilah function di bawah (asumsikan setiap test case memiliki 1 type data saja)

function addEverythingUp(arr) {
  let sum = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] === "number") {
        sum = Number(sum);
      }
      sum += arr[i][j];
    }
  }
  return sum;
}

console.log(
  addEverythingUp([
    [1, 3, 4],
    [123, 433, 123],
    [22, 985, 153],
  ])
); // 1847

console.log(
  addEverythingUp([
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
  ])
); // 'abcdefghi'
