//Q9-Write a program to find the last duplicate index in an array

//[1,2,2,3,4,1,5,3]

const lastDuplicate = (arr) => {
  let len = arr.length;
  
  let visited = new Set();

  let countOccurence = new Map();

  for (let i = 0; i < len; i++) {
    if (countOccurence.has(arr[i])) {
      countOccurence.set(arr[i], countOccurence.get(arr[i]) + 1);
    } else {
      countOccurence.set(arr[i], 1);
    }
  }

  console.log(countOccurence);

  for (let j = len - 1; j >= 0; j--) {
    if (countOccurence.get(arr[j]) > 1 && !visited.has(arr[j])) {
      console.log(`${arr[j]} last duplicate index = ${j}`);
    }
    visited.add(arr[j]);
  }

};

let arr = [1, 2, 2, 3, 4, 1, 5, 3];
lastDuplicate(arr);
