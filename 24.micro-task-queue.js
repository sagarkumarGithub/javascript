console.log("Program started");

setTimeout(() => {
  console.log("I am set time out function");
}, 1000);

Promise.resolve().then((val) => {
  console.log("Promise output");
});

console.log("Program ends");

/*
     Program output.
     ---------------
    Program started
    Program ends
    Promise output
    I am set time out function

    reason.
    -------
    * settimeout an promise both are asynchronous methods.
    * settimeout wil move to callback queue.
    * promise are send to different stack (micro-task-queue).
    * js give more priority to micro-task-queue.
    * thats why promises are printed before settimeout functions.
*/


