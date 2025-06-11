// Q3- Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

function countVariables(str) {
  let count = new Map();
  let resStr = "";

  for (let i = 0; i < str.length; i++) {
    if (count.has(str[i])) {
      count.set(str[i], count.get(str[i]) + 1);
    } else {
      count.set(str[i], 1);
    }
  }

  for (let [key, val] of count) {
    resStr += key + val;
  }

  return resStr;
}

let str = "abcabcdabbcc";
console.log(`string with its occurence: ${countVariables(str)}`);
