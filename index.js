//Question 1 :

  function callname(name) {
    console.log("Welcome ",name);
    }
    function Func(callback) {
        callback("Mohini");
    }
    Func(callname);

//Question 2 :

  function callbackHell(){
    setTimeout(() => {
        console.log("1");
        setTimeout(() => {
            console.log("2");
            setTimeout(() => {
                console.log("3");
                setTimeout(() => {
                    console.log("4");
                    setTimeout(() => {
                        console.log("5");
                        setTimeout(() => {
                            console.log("6");
                            setTimeout(() => {
                                console.log("7")
                            },7000);
                        },6000);
                    },5000);
                },4000);
            },3000);
        },2000);
    },1000);
  }
  callbackHell()

//Question 3 :

  let counter = 0;
  function timeOut(i) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(++counter);
      },  1000 * i)
    });
  }
  for (let i = 1; i <= 7; i++) {
    timeOut(i).then((x) => console.log( x))
  }

//Question 4 :

const lUser = (argue) => {
  return new Promise((resolve, reject) => {
    if (argue=="YES"){
        resolve("Promise Resolved");
    } 
    else{
        reject("Promise Rejected");
    }
  });
  };

  lUser("YES").then(
  (value) => {  console.log(value) },
  (error) => {  console.log(error) }
  );
  lUser()

//Question 5 :

  function addarray(array) {
    let sum = 0;
    for(let i of array) {
        sum += i;
    }
    console.log("Sum of array element is ",sum);
    }
    function arr(callback) {
        callback([2, 3, 4]);
    }
    arr(addarray);

// Question 6 :

  function callbackHell(){
    setTimeout(() => {
        console.log("Value 1");
        setTimeout(() => {
            console.log("Value 2");
            setTimeout(() => {
              console.log("Value 3");
              setTimeout(() => {
                  console.log("Value 4");
              },4000);
            },3000);
        },2000);
    },1000);
    }
    callbackHell();

// Question 7 :

  function display(val) {
    console.log(val);
    }

    let myPromise = new Promise(function(resolve, reject) {
    let name="Rahul";
    if (name == "Rahul") {
      resolve("OK, Hello Rahul");
    } else {
      reject("Error, wrong name");
    }
    });

    myPromise.then(
    function(value) {display(value);},
    function(error) {display(error);}
    );

// Question 8 :

  async function display() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("Hello");}, 3000);
    });
    console.log(await myPromise);
    }
    display();
    console.log("Rahul");

// Question 9 :

    promise1 = Promise.resolve(300);
    promise2 = 200
    promise3 = new Promise(function(resolve, reject) {
                setTimeout(resolve, 100, 'Rahul');
            });
    Promise.all([promise1, promise2, promise3]).then(function(val) {
    console.log(val)
    });
















