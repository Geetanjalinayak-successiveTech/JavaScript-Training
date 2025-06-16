// Q8- Write a program to dispaly number from 1-20 using all types of loops

function printUsingFor(num){

    for(let i=1;i<=num;i++)
    {
        console.log(i);
    }
}

function printUsingWhile(num){
    let i=1;

    while(i<=num)
    {
        console.log(i);
        i++;
    }
}


function printUsingdoWhile(num){
    let i=1;
   do{
    console.log(i);
    i++;
   }
   while(i<=num);
}
printUsingdoWhile(20);