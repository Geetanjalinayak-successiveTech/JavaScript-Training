// Q3. Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

let arr = [
  { name: "John", age: 27, id: 1 },
  { name: "Peter", age: 28, id: 2 },
  { name: "Doe", age: 26, id: 3 },
];

for(val of arr)
{
    delete(val.id);
}
console.log(arr);
