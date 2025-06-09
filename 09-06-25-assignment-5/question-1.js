//Q1: Write a program to iterate over object.


const obj={
    name:"John",
    age:30,
    Designation:"software Developer",
}

for(const porperties in obj){
    console.log(`${porperties} : ${obj[porperties]}`);
}