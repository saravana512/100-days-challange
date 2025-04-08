function synchronus() {
  console.log(1);
  console.log(2);
  setTimeout(() => {
    console.log("Value logged");
  }, 5000);
  console.log(3);
}

synchronus();

async function asynchronus() {
  console.log(1);
  console.log(2);
  await new Promise((res, rej) => {
    setTimeout(() => {
      res(console.log("async"));
    }, 1000);
  });
  setTimeout(() => {
    console.log("Value logged");
  }, 5000);
  console.log(3);
}

asynchronus();
