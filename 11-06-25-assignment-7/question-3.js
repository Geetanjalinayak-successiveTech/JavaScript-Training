//Q3. Convert a callback-based API to a Promise-based API

// function fetchData(callback) {
//   setTimeout(() => {
//     callback(null, "Data fetched successfully");
//   }, 1000);
// };

function fetchDataWithPromise() {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(resolve("Data fetched successfully"), 1000);
    } else {
      reject(error);
    }
  });
}

fetchDataWithPromise()
  .then((data) => console.log(data))
  .catch(() => console.log("rejected"));
