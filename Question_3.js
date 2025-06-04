//Question-3:  Write a function expression that takes in another function as an argument

const sayHello=(name, callback) =>{
  console.log("hello", name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

sayHello("John", sayBye);
