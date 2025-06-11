// Q6:Implement a function that returns a resolved Promise after a specified delay using async/await.

let PromiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (error) {
      resolve("Promise is resolved");
    } else {
      reject("Promise is rejected");
    }
  }, 10000);
});

async function usePromise() {
  try {
    const response = await PromiseOne;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
usePromise();
