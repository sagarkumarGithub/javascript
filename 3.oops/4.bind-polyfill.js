/*
       ----------------------
          polyfill of bind.
       ----------------------   
*/

let person1 = {
  name: "sagar",
  age: 23,
};

let showDetails = function (city, state) {
  console.log(this.name + " " + this.age + " " + city + " " + state);
};

// Actual bind method.
//--------------------

let showDetailsBind = showDetails.bind(person1, "gaya", "bihar");
showDetailsBind();

// Polyfill of bind.
//-------------------

Function.prototype.myBind = function (...args) {
  // we were passing obj in actual bind
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]); // params is array which we can not call with call
  };
};

let showDetailsMyBind = showDetails.myBind(person1, "lucknow");
showDetailsMyBind("UP");

// when we call gaya as passing an argument then it will show undefined.
// showDetailsMyBind("sirsa");
