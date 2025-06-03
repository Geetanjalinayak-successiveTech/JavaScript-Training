// Question-2: Write a function to take input(age, name, phone no.) from user and display it

let age= prompt("Enter your age:");
let Name=prompt("Enter you name:");
let phone= prompt("Enter your phone no. :");


function displayUserDetails(){
    console.log( "User name is", Name , "User age is" , age, "user phone no. is" , phone);
}
const displayName=document.getElementById("userName");
const displayAge=document.getElementById("userAge");
const displayPhoneNo=document.getElementById("userPhone");
displayName.innerHTML=Name;
displayAge.innerHTML=age;
displayPhoneNo.innerHTML=phone;



displayUserDetails();