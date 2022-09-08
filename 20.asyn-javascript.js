/*
            Asyncronous JavaScript
          -------------------------

    * javaScript is a synchrounous js. that was single threaded.
    * Async JavaScript 
       1. call back
       2. promises.
       3. async-await   
       
    * Call backs :-
       We can pass function as an argument. we can call another function inside a function.
       1. syncronous call back
       2. asyncronous call back.   
*/

// Synchronous callback:-

function greet(personName, age, cb, cb2) {
  let msg = "Hello " + personName;
  let ageOfPerson = age;
  cb(msg);
  cb2(age);
}
function showAge(age) {
  //   console.log(age);
}
function logGreeting(greeting) {
  //   console.log(greeting);
}

greet("sagar", 25, logGreeting, showAge);

// Asynchronous callback:-

console.log("hello");

setTimeout(function st1() {
  console.log("I am st1");
}, 2000);

setTimeout(function st2() {
  console.log("I am st2");
}, 1000);

function sayBye() {
  console.log("Bye");
}
sayBye();

/* 
    Async java Script :-
    --------------------

    there are 3 major things.
    1. call stack
    2. node api
    3. call back queue -> event loop

    * hello will be printed out.
    * st1 and st2 are node methods those will mode to node api section.
    * st1 and st2 will be moved to event loop.
    * But after the copletion of main thread methods inside event loop will be executed.
    * sayBuy function will print bye.
    * st2 will print 
    * st1 will print
*/

