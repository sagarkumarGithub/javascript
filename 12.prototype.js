/*
-----------------------------------------------------------------------
        Prototype and Polyfills of Map , Filter and Reduce
-----------------------------------------------------------------------
   * There are many browsers available in mareket.
   * If some of browser does not support any method (map,reduce,filter) then we can not use them.
   * We will define our own prototype in any browser.
   
   -> Inside browser
   -------------------
   let arr = [1,2,3,4];
   arr;
   it will give prototype
----------------------------------------------

Array.prototype.myFunction = function () {
  console.log(this);
};

let arr = [1, 2, 3, 4, 5];
arr.myFunction();
*/

// prototype of map function.
Array.prototype.myMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i]));
  }
  return newArr;
};

function square(x) {
  return x * x;
}

let arr = [1, 2, 3, 4, 5, 6, 7];
let mappedArr = arr.map(square);
console.log(mappedArr);

// prototype of filter function.
Array.prototype.myFilter = function (cb) {
  let newArr1 = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      newArr1.push(this[i]);
    }
  }
  return newArr1;
};

function isEven(x) {
  return x % 2 === 0;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
let filterdArr = arr1.myFilter(isEven);
console.log(filterdArr);
