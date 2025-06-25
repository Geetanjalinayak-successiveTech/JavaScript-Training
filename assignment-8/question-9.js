// Find Error in below questions and rectify them


function Person(name, age) {
  this.name = name;
  this.age = age;
}
 person = Person("John Doe", 30); // error-> new keyword is missing
console.log(person.name);


//corrected code 

function Person(name, age) {
  this.name = name;
  this.age = age;
}
 person = new Person("John Doe", 30); // error-> new keyword is missing
console.log(person.name);