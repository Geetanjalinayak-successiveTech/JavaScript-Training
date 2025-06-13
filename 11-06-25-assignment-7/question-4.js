//4. Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

function fn(id) {
  return () =>
    new Promise((resolve) => {
      console.log("start", id);
      setTimeout(() => {
        console.log("End", id);
        resolve(id);
      }, 2000);
    });
}

const task = [
  fn(1),
  fn(2),
  fn(3),
  fn(4),
  fn(5),
  fn(6),
  fn(7),
  fn(8),
  fn(9),
  fn(10),
];

async function runTasks(tasks, limit) {
  let result = [];

  for (let i = 0; i < tasks.length; i += limit) {
    let batch = tasks.slice(i, i + limit);
    let promises = batch.map((fn) => fn());
    let res = await Promise.all(promises);
    result.push(...res);
  }

  return result;
}

runTasks(task, 3).then((res) => {
  console.log("All done:", res);
});
