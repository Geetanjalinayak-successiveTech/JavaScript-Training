// Q1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

function removeDuplicates(string) {
  let len = string.length;
  const uniqueString=new Set();
  let resultString="";
  for(let i=0;i<len;i++)
  {
    if(!uniqueString.has(string[i]))
    {
      resultString+=string[i];
      uniqueString.add(string[i]);
    }
  }


  return resultString;
}
let str="Hello Yellow";

console.log(`After removing duplicates: ${removeDuplicates(str)}`);
