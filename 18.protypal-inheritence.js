/*
---------------------------------------
        Prototypal Inheritence
--------------------------------------- 

    * Prototype
---------------------
    -> prototype is a set or object which maintains the list of inbuilt method which can be used by our array or objects.
    -> so that when we call those functions then we must have access to those functions.
    -> prototype provide a lot of methods associated with that array or objects.
    -> __arr.proto__ is same as arr.prototype

let arr = [1,2,3,4,5,6];

arr.__proto__
-> it returns object

arr.prototype
-> it will also return an object

arr.__proto__.__proto__
-> it will also return an object

--------------------------------------------
  it means we can say that array is object

Object.prototype
-> it will return the same object
*/

let arr = [1, 2, 3, 4, 5];
let person = {
  name: "adam",
  age: 25,

  showDetails: function () {
    console.log(this.name + " " + this.age);
  },
};

// person.__proto__
// -> it will return an object

// person.__proto__.__proto
// -> it will return null

//       Protypal Inheritence.
//----------------------------------

let student1 = {
  name: "chandan",
  roll: 17,

  showDetails: function () {
    console.log(this.name + " " + this.roll);
  },
};

let student2 = {
  name: "sudhansu",
};

student2.__proto__ = student1;
console.log(student2.name + " " + student2.roll);
student2.showDetails();

/*
    * when we assigned prototype of student1 to student 2 then student2 started accessing all properties from student1.
    * If student2 has not something then it can search those things in student1, and if you got that thing then simply return.
    * student2 has its name property but it did'nt have age property so it overtided the name property but accessed the age property 
      of student1.
    * this is called protypal inheritence that :- if we assign the prototype of one object to other object then it starts accesing all 
      the properties of the other object.

*/
