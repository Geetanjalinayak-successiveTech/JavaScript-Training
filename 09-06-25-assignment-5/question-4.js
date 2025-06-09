// Q4. Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.

const originalObject={
    name:"John",
    age:34,
    id:1,
}

function deepClone(originalObject){
    Object.create(newObject);

    for(const properties in originalObject){
        newObject.name= "Mike";
        newObject.age=34,
        newObject.id=1;
    }

    return newObject;
}

