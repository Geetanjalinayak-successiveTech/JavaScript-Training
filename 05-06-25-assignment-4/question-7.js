// Q7. Write a program to find index of duplicate elements in an array

function indexOfDuplicate(arr) {
  let len = arr.length;

  let unique = new Map();
  let duplicate = new Map();

  arr.forEach((val, ind) => {
    if (unique.has(val)) {
      duplicate.set(val, ind);
    } else {
      unique.set(val, ind);
    }
  });

  for (const [key, val] of duplicate) {
    console.log(`${key} duplicate= ${val}`);
  }
}
let arr = [1, 2, 3, 1, 2, 4, 3];

console.log(`Index of Duplicate in an array: ${indexOfDuplicate(arr)}`); //output=> [3,4,6]
