/*
  -> we changed the value of copy array but that value gets changed at both array(original + copy).
     both array are pointing to the same reference thats why changes show on both array.

  -> Sollution - 1
    ---------------
    * shallow copy (using spread operator)
      - when we create a seprate copy of object and array at first level known as shallow copy.
      - not works in next level -> nested array or object. 
   
  -> Sollution - 2
    ---------------    
    * Deep copy {JSON.parse(JSON.stringyfy(sports))}
    - it create different refrence for all nested array or object.

*/

//--------------------------------
// Problem statement (In Array)
//--------------------------------

let arr = [1, 2, 3, 4, 5];

let copyArr = arr;
copyArr[1] = 20;

// console.log(arr);
// console.log(copyArr);

//--------------------------------------------

// Shallow copy (using spread operator)
//---------------------------------------

let sports = [
  "cricket",
  "football",
  "basket-ball",
  { a: "badminton", b: "chess" },
];
let copySports = [...sports];

copySports[1] = "volly-ball";

// console.log("original array:", sports);
// console.log("copy array:", copySports);

// Nested objects
//----------------
// copySports[3]["a"] = "ludo";
// console.log("original array:", sports);
// console.log("copy array:", copySports);

// Deep copy {JSON.parse(JSON.stringyfy(sports))}
//------------------------------------------------
let deepCopy = JSON.parse(JSON.stringify(sports));
deepCopy[1] = "volly-ball";
deepCopy[3]["a"] = "ludo";
// console.log(sports);
// console.log(deepCopy);

//--------------------------------
// Problem statement (In Objects)
//--------------------------------

let obj = {
  name: "sagar",
  age: 22,
};

let newObj = obj;
newObj.name = "sahil";

// console.log(obj);
// console.log(newObj);

// Shallow Copy
//---------------

let shallowCopy = { ...obj };
shallowCopy.name = "rajan";
// console.log(obj);
// console.log(shallowCopy);

let anotherShallowPerson = Object.assign({}, person);
// console.log(obj);
// console.log(anotherShallowPerson);

// deep Copy
//------------

let person = {
  name: "samar",
  age: 23,
  hobbies: ["sports", "coding", "cooking"],
};

let newPerson = JSON.parse(JSON.stringify(person));
newPerson.name = "rahul";
newPerson.hobbies[0] = "dancing";

console.log(person);
console.log(newPerson);
