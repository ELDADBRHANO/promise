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
function printPromise() {
  getPromise()
    .then((data) => {
      my_p.innerText = data;
    })
    .catch((err) => {
      my_p.innerText = err;
    });
}

function getModolue(num1, num2) {
  return new Promise((resolve, reject) => {
    if (num2 % num1 == 0) {
      resolve("yes there is left over");
    } else {
      reject("error");
    }
  });
}
function printModolue() {
  getModolue(5, 10)
    .then((data) => {
      my_text.innerText = data;
    })
    .catch((err) => {
      my_text.innerText = err;
    });
}

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
function printRes() {
  checkIfNumIsInArray(6, [6, 7, 8, 12, 4, 3])
    .then((answer) => {
      demo_text.innerText = answer;
    })
    .catch((err) => {
      demo_text.innerText = err;
    });
}

function playGetSeif5() {
  async function getSeif5() {
    try {
      btnGetSeif5.disabled = true;
      await checkIfNumIsInArray(6, [6, 7, 8, 12, 4, 3]).then((data) => {
        console.log(data);
      });
    } catch (error) {
      console.log(error);
    } finally {
      btnGetSeif5.disabled = false;
    }
  }
  getSeif5();
}

function btnCallUrl() {
  async function callUrl() {
    try {
      div_id.innerHTML= `<img style="width:20vw;" src="imges/loading.gif"/>`
      btn3.disabled=true;
      await fetch("https:/moviesmern.herokuapp.com/movies/all").then((data) => {
        console.log(data);
      });
    } 
    catch (error) {
      console.log(error);
    } finally {
      btn3.disabled=false;
      div_id.innerHTML= ""
    }
  }
  callUrl();
}



function holdPlaceKeanu() {
  async function getPlaceKeanu() {
    try {
      div_id1.innerHTML= `<img style="width:20vw;" src="imges/loading.gif"/>`
      btn4.disabled=true;
      await fetch("150/200/https:placekeanu.com").then((data)=>{
        div_id1.innerHTML=data
        console.log(data);
      })
    }
     catch (error) {
      div_id1.innerHTML=error
    }
    finally{
      div_id1.innerHTML= ""
      btn4.disabled=false;
    }
  }
  getPlaceKeanu()
  
}




async function getApiJikan() {
  try {
    await fetch("https://api.jikan.moe/v4/anime").then((response)=>{
      console.log(response);
    })
  }
   catch (error) {
    console.log(error);
    
  }finally{}
}
getApiJikan()


