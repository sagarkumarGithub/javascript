/*
     Array.isArray Method.
     ---------------------
    -> typeof method tells the type of that datatype.
          * array-> object
            string-> string
            object-> object
            number-> number 
            
    -> to check whether it is array or not we have apecial method.
          * Array.isArray()
            Is array 
            array-> true
            string-> false
            object-> false
            number-> false

*/

let arr = [1, 2, 3, 4, 5];

let str = "hello";

let obj = {
  name: "sagar",
  age: 23,
};

let num = 25;

console.log("array->", typeof arr);
console.log("string->", typeof str);
console.log("object->", typeof obj);
console.log("number->", typeof num);

console.log("-------------------------------------");
console.log("Is array ");
console.log("array->", Array.isArray(arr));
console.log("string->", Array.isArray(str));
console.log("object->", Array.isArray(obj));
console.log("number->", Array.isArray(num));
