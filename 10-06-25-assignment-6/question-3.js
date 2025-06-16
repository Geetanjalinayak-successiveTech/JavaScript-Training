// 3.1 Create a class Person with properties name, age, gender, and interests. 
// Add a method greeting() that returns a string introducing the person. 
// Also add a method farewell() that returns a string saying goodbye to the person.


class Person{
    constructor(name,age,gender,intrests)
    {
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.intrests=intrests;
    }
    //method

    greet()
    {
        console.log(`hii ${this.name} , your age is ${this.age}, gender:${this.gender} , and you have intrest in ${this.intrests}`);
    }

    farewell()
    {
        console.log(`GoodBye! ${this.name}`)
    }
}

let john=new Person("John",34, "male", "chess");

john.greet();
john.farewell();


//3.2 Create a class Student that inherits from the Person class and has a property studies.
//  Override the greeting() method to include information about what the student is studying.

class student extends Person{
    constructor(name,age,gender,intrests,studies)
    {
        super(name,age,gender,intrests);
        this.studies=studies;
    }

    greet()
    {
        console.log(`Hii! ${this.name} and this student is studying ${this.studies}`);
    }
}

// 3.3 Create a class Teacher that inherits from the Person class and has a property subjectsTaught. 
// Override the farewell() method to include information about what the teacher teaches.

class Teacher extends Person{

    constructor(name,age,gender,intrests,subjectTaught)
    {
        super(name,age,gender,intrests);
        this.subjectTaught=subjectTaught;
    }

     farewell()
    {
        console.log(`GoodBye! ${this.name} ,taught subject ${this.subjectTaught}`)
    }
}

let mike=new student("mike",12,"male", "chess", "Maths");
mike.greet();

let peter=new Teacher("peter", 21,"male","chess","english");
peter.farewell();