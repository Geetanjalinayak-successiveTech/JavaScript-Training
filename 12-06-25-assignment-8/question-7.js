// Find Error in below questions and rectify them

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// error->var is function scoped not blocked scope

// corrected

for (let  i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
