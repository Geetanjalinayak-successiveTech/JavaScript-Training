// Q4. Write a program to print all even number first and then all odd numbers

let numberOfTimes=10;

let pattern="";

for(let i=0;i<numberOfTimes;i++)
{
    if(i%2===0)
    {
        pattern+=i;
        pattern+=" "
    }
}

for(let i=0;i<numberOfTimes;i++)
{
    if(i%2!==0)
    {
        pattern+=i;
        pattern+=" ";
    }
}

console.log(pattern);

