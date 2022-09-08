/*
--------------------------
      Constructor
--------------------------

let car1 = {
    brand : "BMW",
    model : "x5",
    color : "black"
}
let car2 = {
    brand : "Mercedes",
    model : "s class",
    color : "yellow"
}
 
 * It is not good thing to write same code again and again
 * We will do same thing with constructor efficiently.
 * we will pass property as an argument and constructor wil create object for us.

*/

// constructor function
function car(brand, model, color) {
  (this.brand = brand), (this.model = model), (this.color = color);

  this.drive = function () {
    console.log("i am driving " + this.brand);
  };
}

let car1 = new car("bmw", "xs", "blue");
console.log(car1.brand);
let car2 = new car("lamborgini", "avantador", "yellow");
console.log(car2.brand);

car1.drive();
car2.drive();
