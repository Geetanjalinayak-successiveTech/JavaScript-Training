// Q2. Give an example of using multiple callback functions in a single function in JavaScript

function fn(a, b, callback1, callback2) {
  console.log("Call");

  callback1.call(null, a, b);

  console.log("Apply");
  callback2.apply(null, [a, b]);

  console.log("Bind");
  const binding = callback1.bind(null, a, b);
  binding();
}

function add(a, b) {
  console.log(`result: ${a + b}`);
}

function sub(a, b) {
  console.log(`result: ${a - b}`);
}

fn(2, 3, add, sub);
