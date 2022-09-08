/*
      Promises and their functions
     ------------------------------
*/

//   WHAT DOES REJECT AND RESOLVE METHOD DO.
//--------------------------------------------

// resolve is a method which returns a promise if promise is resolved then we can get ans and use the value with the help of .then().
// reject is a method which returns a promise if promise is rejected then we can get err and use the err with the help of .catch().


// method - 1 (proise.all)
//--------------------------

let p1 = new Promise(function (resolve, reject) {
  resolve("promise 1 is resolved");
});

let p2 = new Promise(function (resolve, reject) {
  resolve("promise 2 is resolved");
});

let p3 = new Promise(function (resolve, reject) {
  resolve("promise 3 is resolved");
});

// inside promie.all we can pass array to which we want to resolve.
// this promise further return promise.
// we need to use then to resolve the promise.
// it will return an array that contains result of all promises.

let promiseAll = Promise.all([p1, p2, p3]);
promiseAll
  .then((promiseArr) => {
    console.log(promiseArr);
  })
  .catch((err) => {
    console.log(err);
  });

/* if any one of the promise is rejected then catch will catch statement of that promise and 
   promiseAll will give reject message and reject all array. */

// method - 2 (promise.race)
//---------------------------

// in promise.race we pass array of promise but it returns single value.
// it will return that promise which will execute in first.
// if promise 2 is rejected but promise 1 is executed then race will be executed.
// if promise 1 is rejected but promise 2 is executed then race will show error.

Promise.race([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

// method - 3 (Promise.allSettled)
//---------------------------------

// it will return array that contains value and of all the promises.
// if any one of the promise is rejected then it wiil show its status rejected.

Promise.allSettled([p1, p2, p3])
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  });

// method - 4 (Promise.finally)
//------------------------------

// finally method will always execute either the promise will reject or resolve.
/* then and catch do all the things then why do we need finally.
   because suppose : -
   there is a loader(global variable) you set it to be true, and the promise get 
   resolved but at the end you need to off the loader then you can make loader to false
   in finally section. 
*/
// it provide finishing to your application.
// it is also used for cleaning.

var loader = true;
function test() {
  var a = 1 + 1;
  return new Promise(function (resolve, reject) {
    if (a === 3) {
      resolve("test is resolved...");
    } else {
      reject("test is rejected");
    }
  });
}

test()
  .then((val) => {
    console.log(val);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    loader = false;
    console.log("Experiment completed");
  });
