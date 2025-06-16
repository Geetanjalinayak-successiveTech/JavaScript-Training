/*
3. Write a program to display Diamond Pattern

        *
      *  *
    *  *  *
  *  *  *  *
*  *  *  *  *
  *  *  *  *
    *  *  *
     *  *
       *
*/


let row=5;

for(let i=1;i<=row;i++)
{
    let pattern="";
    for(let j=1;j<=row-i;j++)
    {
        pattern+=" ";
    }
    

    for(let k=1;k<=i;k++)
    {
        pattern+="* "
    }

    console.log(pattern);
}

for(let i=row-1;i>=1;i--)
{
   let pattern2="";
   for(let j=1;j<=row-i;j++)
   {
    pattern2+=" ";
   }

   for(let k=1; k<=i;k++)
   {
    pattern2+="* ";
   }

   console.log(pattern2)
}

//console.log(pattern+pattern2);


