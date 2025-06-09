// Q8. Write a program to remove dupliacte elements from an array

function removeDuplicates(arr) {
  let len = arr.length;
  let uniqueSet=new Set();
  let uniqueArray=[];
  for(let i=0;i<len;i++)
  {
    uniqueSet.add(arr[i]);
  }

  uniqueArray =[...uniqueSet];
  return uniqueArray;

}

arr = [1, 2, 1, 2, 3, 4, 3, 5, 4];
console.log(`after removing duplicates: ${removeDuplicates(arr)}`);
