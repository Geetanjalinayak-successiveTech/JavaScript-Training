// Q2. Give an example of using multiple callback functions in a single function in JavaScript

function greet(name) {
  console.log(`Hello! My name is ${name}`);
}

function farewell(name, callback) {
  console.log("Good Bye!!");
  callback();
}

function introduction(name, goodbye) {
  console.log(name);
  //greeting(name);
  goodbye(greet);
}

introduction("Rohit", farewell);
