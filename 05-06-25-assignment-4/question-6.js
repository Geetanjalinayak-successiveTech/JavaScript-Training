// Q6-Write a program to find sum of an array

function sumOfArray(arr)
{
   let len=arr.length;
    const initialValue=0;
    const sumValue=arr.reduce((accumulator,currentValue)=> accumulator+currentValue, initialValue);

    return sumValue;
}

let arr=[1,2,3,4];
console.log(`Sum of elements : ${sumOfArray(arr)}`);