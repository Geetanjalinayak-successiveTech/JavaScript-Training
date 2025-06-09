//2.Write a program to reverse a string ("Hello John" => "olleH nhoJ")

const reversedString = (str) => {
  const reversed = str.split(" ").map((word) => word.split("").reverse().join("")).join(" ");

  return reversed;
};


let str = "Hello John";

console.log(`Reversed String: ${reversedString(str)}`);
