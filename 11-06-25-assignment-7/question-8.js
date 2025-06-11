//Q8. Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

const url1 = "https://api.github.com/user";
const url2 = "https://api.github.com/emojis";
const url3 = "https://api.github.com/events";

async function fetchData() {
  getData1 = await fetch(url1);
  getData2 = await fetch(url2);
  getData3 = await fetch(url3);

  
}
