const showData = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve("hey");
    }, 2000);
  } catch (error) {
    reject(err);
  }
});

showData
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });
