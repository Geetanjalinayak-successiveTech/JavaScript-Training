//Q3. Convert a callback-based API to a Promise-based API

// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null, "Data fetched successfully");
//   }, 1000);
// };

function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (true) {
        resolve("Data fetched successfully");
      } else {
        reject("error");
      }
    }, 1000);
  });
}

fetchDataWithPromise()
  .then((data) => console.log(data))
  .catch(() => console.log("rejected"));
