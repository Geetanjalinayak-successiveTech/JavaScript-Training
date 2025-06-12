// Find Error in below questions and rectify them

// let myArray = [1, 2, 3, 4];
// for (let i = 0; i < myArray.length; i++) {
//    console.log(myArray[i]);
// }

// let myNumber = myArray[5];
// if (myNumber) {
//    console.log('The number is: ' + myNumber);
// } else {
//    console.log('The number is undefined');
//}

// Error-> myarray[5] (index must be between 0-3 for length of 4)

let myArray = [1, 2, 3, 4];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

let myNumber = myArray[3];
if (myNumber) {
  console.log("The number is: " + myNumber);
} else {
  console.log("The number is undefined");
}
