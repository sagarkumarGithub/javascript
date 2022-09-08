/*
    Creating objects using classes.
    -------------------------------
*/

class Person {
  constructor(name, age) {
    (this.name = name), (this.age = age);
  }

  showDetails() {
    return this.name;
  }
}

let person1 = new Person("sagar", 22);
console.log(person1.showDetails());

// Classical Inheritence
//------------------------

class PersonChild extends Person {
  constructor() {
    super("chandan");
  }
}
let person2 = new PersonChild();
console.log(person2.showDetails());

// inheritence is not sophisticated used in JS.
