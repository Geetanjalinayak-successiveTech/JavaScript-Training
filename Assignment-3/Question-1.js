// Question 1-  Write a program to perform functionality of a calculator (add,sub,multiply,divide)

let num1 = 23;
let num2 = 32;
let result;

let operator="-"

switch (operator) {
  case "+":
    result = num1 + num2;
    break;

  case "-":
    result = num1 - num2;
    break;

  case "*":
    result = num1 * num2;
    break;

  case "/":
    result = num1 / num2;
    break;

  default:
    console.log("Invalid Option!");
}

console.log("Result is", result);