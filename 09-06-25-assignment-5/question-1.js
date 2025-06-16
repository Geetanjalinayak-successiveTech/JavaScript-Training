//Q1: Write a program to iterate over object.


const obj={
    name:"John",
    age:30,
    Designation:"software Developer",
}

// Object.keys(obj).forEach((ele,index )=> {
//     const value=Object.values(obj);
//     console.log(`${ele}: ${value[index]}`)
// });


Object.keys(obj).forEach((ele,index )=> {
    console.log(`${ele} : ${Object.values(obj)[index]}`)
});




