//Q5. Write a program to print all even number first and then all odd numbers using only one iteration

let even="";
let odd="";

let numberOfTimes=10;

for(let i=1;i<=numberOfTimes;i++)
{
   if(i%2===0)
   {
    even+=i+" ";
   
   }

   else{
    odd+=i+" ";
    
   }
}

console.log(even+odd);