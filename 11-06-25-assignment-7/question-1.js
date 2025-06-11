//Q1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

function greet() {
  console.log("Hello World!!");
}

function fn(callback) {
  setTimeout(() => {
    console.log("this will execute after 5 sec");
  }, 5000);

  callback();
}

fn(greet);
