// Q5. Write a program to convert given string in camel case ("hello john doe" => helloJohnDoe)

function camelCasedString(str) {
  let resString = "";
  resString += str
    .split(" ")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");

  return resString;
}

console.log(` camelCase: ${camelCasedString("hello john doe")}`);
