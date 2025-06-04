/*2. Write a program to display following output as shown in figure

  1
  2 3
  4 5 6
  7 8 9 10 
*/

let val=1;
let pattern="";

for(let i=1;i<=4;i++)
{
    
    for(let j=1;j<=i;j++)
    {
        pattern+=val;
        val++;
    }
    pattern+="\n";
    
}
console.log(pattern);


/*
    1
    2 2
    3 3 3
    4 4 4 4
*/

let pattern2="";

for(let i=0;i<=4;i++)
{
    for(let j=1;j<=i;j++)
    {
        pattern2+=i;
    }
    pattern2+="\n";
}

console.log(pattern2);


/*
1 2 3 4 5
1 2 3 4
1 2 3
1 2
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

let pattern3="";
for(let i=1;i<=5;i++)
{
    let val=1;
    for(let j=5;j>=i;j--)
    {
        pattern3+=val;
        val++;
    }
    
    pattern3+="\n";
}

for(let i=2;i<=5;i++)
{
    let val=1;
    for(let j=1;j<=i;j++)
    {
        pattern3+=val;
        val++;
    }
    pattern3+="\n";
}

console.log(pattern3)



