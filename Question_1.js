// Question -1: Write a program to give a random output between 1 to 10 

let lastVal=0;
function printRandomNumber(){
    let randomNumber= Math.floor(Math.random()*10);  
    // random function in javascript returns a random number between (0-1) 
    // and multiply with 10 return value between 0-9.99 and floor function convert into integer.

    randomNumber=randomNumber+1;  // adding 1 shift value between 1-10

    if(lastVal===randomNumber)
    {
        randomNumber=(randomNumber%10)+1;
       // console.log("same");
    }
    lastVal=randomNumber;
    console.log(randomNumber);


}




