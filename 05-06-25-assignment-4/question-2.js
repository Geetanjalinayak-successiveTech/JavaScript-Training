//2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")

const reversedString = (str)=>{
    let n=str.length;
    let splitString = str.split(" ");
    let resString="";

    for(let i=0;i<splitString.length;i++)
    {
      // let str1=splitString[0];
       resString+=reverseWord(splitString[i])+" ";
    }

    return resString;

}


function reverseWord(word)
{
   let stack=[];
   for(let i=0;i<word.length;i++)
   {
    stack.push(word[i]);
   }
    let newStr=[];
   for(let j=stack.length-1;j>=0;j--)
   {
     newStr.push(stack[j]);
   }

   return newStr.join('');
}


let str="Hello John";

console.log(`Reversed String: ${reversedString(str)}`);