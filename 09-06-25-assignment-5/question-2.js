// Q2. Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const arr = [
  { name: "John", age: 30 },
  { name: "Peter", age: 25 },
  { name: "Doe", age: 76 },
];

arr.sort((a, b) => a.age - b.age);

console.log(arr);
