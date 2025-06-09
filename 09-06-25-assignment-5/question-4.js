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



const newObject=structuredClone(originalObject);
newObject.adrress.city="Pune";


console.log(originalObject); 
console.log(newObject);
