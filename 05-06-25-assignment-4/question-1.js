// Q1. Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

function removeDuplicates(string) {
  let len = string.length;
  let res = "";
  let finalString = "";

  for (let i = len - 1; i >= 0; i--) {
    let isduplicate = false;
    for (let j = i - 1; j >= 0; j--) {
      if (string[i] == string[j]) {
        isduplicate = true;
        break;
      }
    }
    if (isduplicate == false) {
      res += string[i];
    }
  }

  for (let i = res.length - 1; i >= 0; i--) {
    finalString += res[i];
  }

  console.log(finalString);
}
let str="Hello Yellow";

removeDuplicates(str);
