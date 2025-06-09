//12. Write a program to display intersection of two array

function intersectionOfArray(arr1, arr2) {
  let len1 = arr1.length;
  let len2 = arr2.length;

  const newSet = new Set();

  for (let i = 0; i < len1; i++) {
    newSet.add(arr1[i]);
  }

  const resArr = arr2.filter((val) => newSet.has(val));

  return resArr;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4];

console.log(`Intersection of two array: ${intersectionOfArray(arr1, arr2)}`);
