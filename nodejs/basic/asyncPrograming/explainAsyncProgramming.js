// Asynchronous programming with Async/Await sugar syntax

function asyncPromise() {
  return new Promise((resolve, reject) => {
    const data = [
      {id: 1, name: "Developer A"},
      {id: 2, name: "Devloper B"}
    ];

    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
}

(async () => {
  const data = await asyncPromise();
  const names = data.map(data => data.name);
  console.log(names);
})();
// Async/await is just syntax to make Promise more readable from top to bottom and fit human-logic





