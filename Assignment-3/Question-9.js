//Q9- Write a program to print fibonaaci series

function printFibonacci(n){
    if(n<=1)
    {
        return n;
    }

    return printFibonacci(n-1) +printFibonacci(n-2);

} 
n=10;

for(let i=0;i<=n;i++){
console.log(printFibonacci(i));
}