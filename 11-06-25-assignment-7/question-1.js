//Q1. Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

function fetchUrl(callback) {
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  setTimeout(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => callback(data))
      .catch((error) => callback(error));

  }, 1000);
  
}

function callback(data)
{
  console.log(data);
}

fetchUrl(callback);


