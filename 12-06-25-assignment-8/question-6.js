// Find Error in below questions and rectify them

var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
var getPersonDetails = person.getDetails;
getPersonDetails();


//error-> getDetails is a function here () after person.getDetails is missing and getPersonalDetails is not a function so '()' create error

// corrected->

var person = {
  name: "John Doe",
  age: 30,
  getDetails: function () {
    console.log(this.name + " is " + this.age + " years old");
  },
};
var getPersonDetails = person.getDetails();
getPersonDetails;


