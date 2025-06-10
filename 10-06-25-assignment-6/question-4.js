/*Q4. Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. 
The class should also have a method called `fullName` that returns the person's full name.
Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects 
and returns the average age of all the people in the array.*/


class Person{
    constructor(firstName,lastName,age)
    {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    fullName()
    {
        return this.firstName+ " "+ this.lastName;
    }

    static averageAge(arr)
    {
    
        let sumAge=(arr.reduce((sum, person)=> sum + person.age, 0))/arr.length;

        return sumAge;
    }
}

let per1=new Person("Geetanjali", "Nayak", 22);
let per2=new Person("John", "Doe", 23);
let per3=new Person("Mike", "mike", 54);


let arr=[per1,per2,per3];
console.log(Person.averageAge(arr));


