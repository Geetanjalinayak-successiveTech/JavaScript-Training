// Q4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const originalObject = {
  name: "John",
  age: 34,
  id: 1,
  adrress:{
    city:"New Delhi",
    country:"India",
  }
};

function deepClone(obj) {
  newObject = {};

  for (const properties in obj) {
    newObject[properties] = obj[properties];
  }

  return newObject;
}

let obj1 = deepClone(originalObject);

obj1.age = 32;



console.log(originalObject); // Creates deep copy
console.log(obj1);
