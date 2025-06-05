// Q7. Write a program to find index of duplicate elements in an array


function indexOfDuplicate(arr)
{
    
    let len=arr.length;
    let resArr=[];

    for(let i=0;i<len;i++)
    {
        for(let j=i+1;j<len;j++)
        {
            if(arr[i]===arr[j])
            {
                resArr.push(j);
            }
        }
    }

    return resArr;
}
let arr=[1,2,3,1,2,4,3];

console.log(indexOfDuplicate(arr));   //output=> [3,4,6]

