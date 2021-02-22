/**
 * Here is a glimpse into how async programming used to work with callback
 *
 * @param callback
 */
function getData(callback) {
  setTimeout(() => {
    const data = [
      {id: 1, name: "Developer A"},
      {id: 2, name: "Devloper B"}
    ]; // Assume the data from API

    callback(data);
  }, 1000)
}

getData((data) => {
  const names = data.map(data => data.name);
  console.log(names);
});
