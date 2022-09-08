/*
        --------------------
           call-apply-bind
        --------------------  
        
    * we can call method for of an object for another object.   
    * we can call same method for different objects.  
    * in call we pass argument seprated by commas.
    * in apply we pass argument as an array.   
*/

let person1 = {
  name: "sagar",
  age: 25,
};

let person2 = {
  name: "sahil",
  age: 19,
};

let showDetails = function (city, car) {
  console.log(
    `${this.name} is ${this.age} year old, he lives in ${city} and he drives ${car}`
  );
};

//  call function
// ---------------
showDetails.call(person1, "Dubai", "lamborgini");
// we can pass argument seprated by commas.
showDetails.call(person2, "Noida", "BMW");

//  apply function
// ----------------
showDetails.apply(person1, ["london", "ferrari"]);
// we pass argument as an array.
showDetails.apply(person2, ["china", "jaguar"]);

//  bind function
// ----------------
let person1Bind = showDetails.bind(person1, "newyork", "cycle");
// bind does not call the function immediatly it stores as a function you can call anytime.
let person2Bind = showDetails.bind(person2, "japan", "bus");

console.log(person1Bind);
console.log(person2Bind);
person1Bind();
person2Bind();
