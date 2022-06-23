function getPromise() {
  return new Promise((resolve, reject) => {
    let hour = new Date().getHours();
    if (hour <= 11) {
      resolve("good morning");
    } else {
      reject("good after-noon");
    }
  });
}
getPromise()
  .then((data) => {
    my_p.innerText = data;
  })
  .catch((err) => {
    my_p.innerText = err;
  });

function getModolue(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 % num1 == 0) {
      resolve("yes there is left over");
    } else {
      reject("error");
    }
  });
}
getModolue(5, 10)
  .then((data) => {
    my_text.innerText = data;
  })
  .catch((err) => {
    my_text.innerText = err;
  });

function checkIfNumIsInArray(num, arrayNumbers) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arrayNumbers.length; i++) {
      if (arrayNumbers[i] == num) {
        resolve("yes num is exist in array");
      }
      reject("no");
    }
  });
}
checkIfNumIsInArray(6, [6, 7, 8, 12, 4, 3])
  .then((answer) => {
    demo_text.innerText = answer;
  })
  .catch((err) => {
    demo_text.innerText = err;
  });
