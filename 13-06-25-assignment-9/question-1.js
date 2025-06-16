//Q1. Install the lodash package using npm install lodash. and use any of its function

const lodash= require('lodash')

function removeDuplicate(arr)
{
    return lodash.uniq(arr);
}


console.log(removeDuplicate([1,2,23,4,5,2]));
