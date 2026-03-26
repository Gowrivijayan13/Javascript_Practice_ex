function step1() {
  return new Promise((resolve, reject) => {
    console.log("task1 is started");
    setTimeout(() => {
      console.log("task1 is completed");
      resolve();
    }, 3000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    console.log("task2 is started");
    setTimeout(() => {
      console.log("task2 is completed");
      reject();
    }, 2000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    console.log("task3 is started");
    setTimeout(() => {
      console.log("task3 is completed");
      resolve();
    }, 1000);
  });
}
step1()
  .then(step2)
  .then(step3)
  .then(() => {
    console.log("task is compeleted");
  })
  .catch(() => {
    console.log("task is failed");
  });
