/*
        this keyword.
        -------------

    browser
    --------
    (strict mode + non-strict mode)

    4 case
    ------

    1. print globally
    2. print inside function
    3. print from function inside object
    4.

    node
    -----
    (strict mode + non-strict mode)    
      
*/

// 1. this keyword in node js (non strict)
//-------------------------------------------

// case - 1 (print globally)
//---------------------------
// console.log(this); // return an empty object

// case - 2 (print inside function)
//----------------------------------
function showThis() {
  //   console.log(this); // return a global object
}
showThis();

// case - 3 (print function inside object)
//------------------------------------------
let obj = {
  name: "sagar",
  f: function () {
    console.log(this); // return object itself.
  },
};
obj.f();
