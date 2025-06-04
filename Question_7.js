// 7. All of the above questions from 3-6 needs to be done with arrow functions also

//Write a function expression that takes in another function as an argument
const sayHello = (name, callback) => console.log("hello", name);
callback();

const sayBye = () => console.log("Bye!");

sayHello("John", sayBye);

//Write a function expression that takes in a number and returns its square.
const squareNumber = (number) => number * number;

console.log(squareNumber(2));

//Write a function expression that takes in two numbers and returns their sum.
const sumOfTwoNumbers = (val1, val2) => val1 + val2;

console.log(sumOfTwoNumbers(2, 4));

//Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const checkEvenOrOdd = (number) => (number % 2 === 0 ? true : false);

console.log(checkEvenOrOdd(4));
