//Write a program to concatenate an input of array of arrays

function concatenateArray(arr) {
  let resArr = [];

  for (let i = 0; i < arr.length; i++) {
    resArr = resArr.concat(arr[i]);
  }
  return resArr;
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(`Flatten array: ${concatenateArray(arr)}`);
console.log(arr.flat()); // this is direct method to flatten array.


