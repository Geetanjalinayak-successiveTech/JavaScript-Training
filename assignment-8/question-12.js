// Find Error in below questions and rectify them


async function getData() {
   setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
getData().then(function(data) {
   console.log(data);
});
// error-> async function doesn't return a promise


//corrected code

async function getData() {
  {
    return new Promise((resolve, reject) => {
      setTimeout(function () {
        return [1, 2, 3, 4, 5];
      }, 10000)
      resolve([1,2,3,4,5]);
    });
  }
}
getData().then(function (data) {
  console.log(data);
});