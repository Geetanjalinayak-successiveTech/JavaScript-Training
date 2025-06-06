// Q8. Write a program to remove dupliacte elements from an array

function removeDuplicates(arr) {
  let len = arr.length;
  let newArr = [];
  for (let i = 0; i < len; i++) {
    let val = arr[i];
    if (!newArr.includes(val)) {
      newArr.push(val);
    } else {
      continue;
    }
  }
  return newArr;
}

arr = [1, 2, 1, 2, 3, 4, 3, 5, 4];
console.log(`after removing duplicates: ${removeDuplicates(arr)}`);
