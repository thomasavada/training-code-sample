// Asynchronous programming with callback
function asyncCallback(callback) {
  setTimeout(() => {
    const data = [
      {id: 1, name: "Developer A"},
      {id: 2, name: "Devloper B"}
    ]; // Assume the data from API

    callback(data);
  }, 1000)
}

asyncCallback((data) => {
  const names = data.map(data => data.name);
  console.log(names);
});

// Asynchronous programming with Promise
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

asyncPromise().then(data => {
  const names = data.map(data => data.name);
  console.log(names);
});

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





