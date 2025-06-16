//Q9-Write a program to find the last duplicate index in an array


const lastDuplicate = (arr) => {
  

  let first=new Map();
  let duplicate=new Map();


  arr.forEach((val,ind)=> {
    if(first.has(val))
    {
      duplicate.set(val,ind);
    }
    else{
      first.set(val,ind);
    }
    
  });

  for(const[key,val] of duplicate) 
  {
    console.log(`${key} last index= ${val}`);
  }

};

let arr = [1, 2, 2, 3, 4, 1, 5, 3];
lastDuplicate(arr);
