// Q6-Write a program to find sum of an array

function sumOfArray(arr)
{
   let len=arr.length;
   let sum=0;
   
   for(let i=0;i<len;i++)
   {
    sum+=arr[i];
   }

   return sum;
}

let arr=[1,2,3,4];
console.log(`Sum of elements : ${sumOfArray(arr)}`);