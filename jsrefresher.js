const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Ice cream");
    }, 1500);
  });
  return promise;
};

setTimeout(() => {
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text) => {
      console.log(text);
      return fetchData();
    });
}, 2000);

console.log("Hello");
console.log("Sunshine");
