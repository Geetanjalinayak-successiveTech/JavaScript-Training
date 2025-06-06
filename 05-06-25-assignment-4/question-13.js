//Q13- Write a program to return inverse of an array (index->value and value->index)

//input- [5,4,3,2,1,0];
//output-[ 5, 4, 3, 2, 1, 0 ];

function inverseOfArray(arr){
    let resArr=[];
    for(let i=0;i<arr.length;i++)
    {
        resArr[arr[i]]=i;
    }
    return resArr;
}

let arr=[5,4,3,2,1,0];
console.log(`After inverse value to index and index to value: ${inverseOfArray(arr)}`);
