/*
---------------------------------------------
        Polyfills of map. filter, reduce 
---------------------------------------------
    * Procesural implementation of function.
    * some version doesn't provide these function.
*/

// Map
//-----

let myArr = [1, 2, 3, 4, 5];
let mappedArr = myArr.map(function (x) {
  return x * x;
});
console.log("my array :", myArr);
console.log("mapeed array: ", mappedArr);

// Custom Map
//------------

let myPollyfillMap = function (arr, cb) {
  let myArr1 = [];

  for (let i = 0; i < arr.length; i++) {
    myArr1.push(cb(arr[i]));
  }

  return myArr1;
};

let square = function (x) {
  return x * x;
};

console.log("custom-map-array: ", myPollyfillMap(myArr, square));

// Reduce
//--------

let filterredArr = myArr.filter(function (x) {
  return x % 2 == 0;
});
console.log(filterredArr);

// custom-reduce
//---------------

let myPollyfillReduce = function (arr, cb) {
  let myArr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      myArr2.push(arr[i]);
    }
  }
  return myArr2;
};
let isEven = function (x) {
  if (x % 2 === 0) {
    return x;
  }
};
console.log("custom-reduce-arr: ", myPollyfillReduce(myArr, isEven));
