/*
    Flatten an Object
    -----------------
   -> we have to remove hierarchy or nesting in out object.

    let obj = {
        name: "sagar",
        age:20,
    
        address:{
            city:"noida",
            pincode:210309
        }
    }  
    
    Flattered Object
    -----------------

    let flatteredObj = {
        name: "sagar",
        age:20,
    
        address_city: "noida",
        address_pincode: 210309
        }
    }    

*/

let obj = {
  name: "sagar",
  age: 20,

  address: {
    city: "noida",
    pincode: 210309,
  },
};

function flattenObj(obj, parent, res = {}) {
  for (let key in obj) {
    let propName = parent ? parent + "_" + key : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propName, res);
    } else {
      res[propName] = obj[key];
    }
  }
  return res;
}

let flatteredObj = flattenObj(obj);
console.log(flatteredObj);
