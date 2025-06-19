const lodash= require('lodash')

function removeDuplicate(arr)
{
    return lodash.uniq(arr);
}


console.log(removeDuplicate([1,2,23,4,5,2]));